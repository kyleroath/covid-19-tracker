import React from 'react'
import { TwitterTimelineEmbed } from 'react-twitter-embed'


// import styles from './Twitter.module.css'
// Disabled up top styling for now.

const TwitterContainer = () => {
    return (
        // <div className={styles.container}>
        <section className="twitterContainer">
            <div className="twitter-embed">
                <TwitterTimelineEmbed
                sourceType="profile"
                screenName="WHO"
                options={{
                    tweetLimit: "5",
                    width: "400",
                    height: "100"
                }}
                theme="light"
                noHeader={true}
                noBorders={true}
                noFooter={true}
                ></TwitterTimelineEmbed>
            </div>
    </section>
    // </div>
    )
}

export default TwitterContainer