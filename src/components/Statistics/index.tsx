import classNames from "classnames"
import styles from './style.module.scss'
import React from "react"
import { data } from "./_data"

export const Statistics = () => {
    return (
        <section className={classNames(styles.statistics, "container-fluid")}>
            <h2 className={styles.statistics__heading}>A Life-Changing Experience</h2>
            <p className={styles.statistics__subHeading}>Our online coding bootcamps will take you from absolute beginner to job-ready in just 3 <br /> to 6 months.</p>
            <section className={styles.statistics__grid}>

                {
                    React.Children.toArray(data.map(({ title, figure, description }) => (

                        <div className={styles.statistics__card}>
                            <p className={styles.statistics__cardFigure}>{figure}</p>
                            <p className={styles.statistics__cardTitle}>{title}</p>
                            <p className={styles.statistics__cardDescription}>W{description}</p>
                        </div>
                    )))
                }
            </section>
        </section>
    )
}
