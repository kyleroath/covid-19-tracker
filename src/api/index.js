import axios from 'axios'

const covidURL = 'https://covid19.mathdro.id/api'

export const fetchData = async (country) => {
    let changeableURL = covidURL
    if(country) {
        changeableURL = `${covidURL}/countries/${country}`
    }
    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableURL)

        return { confirmed, recovered, deaths, lastUpdate }
    } catch (err) {
        console.log(err)
    }
}

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${covidURL}/daily`)

        const modifiedData = data.map((dailyData) => ({  // Loop through an array and return it as objects in a new map
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        }))
        return modifiedData

    } catch(err) {
        console.log(err)
    }
}

export const fetchCountries = async () => {
    try {
        const {data: { countries }} = await axios.get(`${covidURL}/countries`)

        return countries.map((country) => country.name)

    } catch(err) {
        console.log(err)
    }
}