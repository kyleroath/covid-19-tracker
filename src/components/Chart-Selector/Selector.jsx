import React from 'react'

import { Checkbox, FormControlLabel } from '@material-ui/core'

import styles from './Selector.module.css'

const Selector = ({graph, handleGraphChange}) => {

    return (
        <div className={styles.label}>
        <FormControlLabel
            control={
                <Checkbox
                    onChange={(e) => { graph === 'bar' ? handleGraphChange('line') : handleGraphChange(e.target.value.toLowerCase()) }}
                    name="Bar"
                    value="Bar"
                    color="primary"
                />
            }
            label="View bar graph"/>
        </div>
    )
}

export default Selector