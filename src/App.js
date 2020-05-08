import React from 'react'
// eslint-disable-next-line
import { Cards, Chart, CountryPicker, ChartSelector, Twitter } from './components'
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
            <div>
            <div className={styles.container}>
                <img className={styles.image }src={cvdimg} alt="COVID19"/>
                <div>
                <Typography variant='h4' align='center'>COVID-19</Typography>
                <Typography variant='subtitle1' align='center'>For latest statistics on COVID-19 infection, recovery and death numbers.</Typography>
                </div>
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                {/* <ChartSelector graph={graph} handleGraphChange={this.handleGraphChange}/> */}
                <Chart data={data} country={country} graph={graph}/>
            </div>
            <Typography className={styles.text} variant='h5' align='center'>Latest Tweets from the World Health Organization</Typography>
            <div className={styles.twitter}>
            <Twitter/>
            </div>
            </div>
                
        )
    }
}

export default App