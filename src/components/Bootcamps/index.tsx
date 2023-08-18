'use client'
import * as React from "react"
import styles from "./style.module.scss"
import { OnlineBootcamp } from "./onlineBootcamp"
import { University } from "./university"
import classNames from "classnames"

export const Bootcamps = () => {
    const [tab, setTab] = React.useState('online')
    const handleSetTab = (tab: string) => setTab(tab)
    return (
        <section className={styles.bootcamps}>
            <div className="container-fluid">
                <h2 className={styles.bootcamps__heading}>Explore Our Bootcamps</h2>
                <div className={styles.bootcamps__tab}>
                    <div
                        className={classNames(styles.bootcamps__tabPane,
                            { [styles.active]: tab === 'online' })}
                        onClick={() => handleSetTab('online')}>
                        Online Coding
                    </div>
                    <div
                        className={classNames(styles.bootcamps__tabPane,
                            { [styles.active]: tab === 'university' })}
                        onClick={() => handleSetTab('university')}>
                        University
                    </div>
                </div>
                <section className={styles.bootcamps__tabContent}>
                    {tab === 'online' ? <OnlineBootcamp /> : <University />}
                </section>
            </div>
        </section>
    )
}
