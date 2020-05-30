// 30 min mark for style guide
import React from 'react'
import {Card, CardContent, Typography, Grid, CircularProgress} from '@material-ui/core'
import CountUp from 'react-countup'
import cx from 'classnames'

import styles from './Cards.module.css'

const Cards = ({ data: {confirmed, recovered, deaths, lastUpdate}}) => {
    if(!confirmed) {
        return (
            <CircularProgress />
        )
    }
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">
                            <CountUp  start={0} end={confirmed.value} duration={2.5} separator="," />
                        </Typography>
                        <Typography color="textPrimary">as of {new Date(lastUpdate).toDateString()}</Typography> 
                        <Typography variant="body2">Number of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">
                            <CountUp  start={0} end={recovered.value} duration={2.5} separator="," />
                        </Typography>
                        <Typography color="textPrimary">as of {new Date(lastUpdate).toDateString()}</Typography> 
                        <Typography variant="body2">Number of recoveries from COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5">
                            <CountUp  start={0} end={deaths.value} duration={2.5} separator="," />
                        </Typography>
                        <Typography color="textPrimary">as of {new Date(lastUpdate).toDateString()}</Typography> 
                        <Typography variant="body2">Number of deaths caused by COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={2} className={cx(styles.card, styles.percentages)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Death Percentage</Typography>
                        <Typography variant="h5">
                            <CountUp  start={0} end={(100 * deaths.value) / confirmed.value} duration={2.5} separator="," />%
                            {/* {`${Math.round((100 * deaths.value) / confirmed.value)}%`}  */}
                        </Typography>
                        <Typography color="textPrimary">as of {new Date(lastUpdate).toDateString()}</Typography> 
                        <Typography variant="body2">The percentage of deaths from infections</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards