import React from 'react'
// eslint-disable-next-line
import { Cards, Chart, CountryPicker, ChartSelector } from './components'
import styles from './App.module.css'
import { fetchData } from './api'

import cvdimg from './images/image.png'
import { Typography } from '@material-ui/core'

class App extends React.Component {
    state = {
        data: {},
        country: '',
        graph: 'line'
    }

    async componentDidMount () {
        const fetchedData = await fetchData()
        this.setState({ data : fetchedData })
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country)
        this.setState({ data: fetchedData, country })
    }

    handleGraphChange = (graph) => {
        this.setState({ graph })
    }

    render() {
        // eslint-disable-next-line
        const { data, country, graph } = this.state
        return (
        <div className={styles.container}>
            <img className={styles.image }src={cvdimg} alt="COVID19"/>
            <Typography variant="h2">COVID-19</Typography>
            <Cards data={data} />
            <CountryPicker handleCountryChange={this.handleCountryChange} />
            <ChartSelector graph={graph} handleGraphChange={this.handleGraphChange}/>
            <Chart data={data} country={country} graph={graph}/>
        </div>
        )
    }
}

export default App