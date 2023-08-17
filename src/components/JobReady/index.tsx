import Image from 'next/image'
import styles from './style.module.scss'
import classNames from 'classnames'
import { Button } from '..'
import { Check } from '../Icons/misc'

export const JobReady = () => {
    return (
        <section className={styles.jobready}>
            <div className={classNames(styles.jobready__flex, 'container-fluid')}>
                <div className={styles.jobready__flexItem}>
                    <Image
                        src="/images/lady_job.svg"
                        alt='lady job'
                        style={{
                            width: '100%',
                            height: '100%'
                        }} width={500}
                        height={300}
                    />
                </div>
                <div className={styles.jobready__flexItem}>
                    <h4 className={styles.jobready__heading}>We’ll Take you from Beginner Level to Job Ready</h4>
                    <p className={styles.jobready__subHeading}>
                        We are idea generators, goal seekers, challenge-thirty proffessionals, creators of unique internet project.</p>
                    <div className={styles.jobready__box}>
                        <div>
                            <Check />
                        </div>
                        <div>
                            <p className={styles.jobready__iconText}>We set you up for success</p>
                            <p>Get the best possible preparation for your new career in tech, with mock interviews, assistance with polishing your CV and developer portfolio, and professional interview tips from our in-house career services team.</p>
                        </div>

                    </div>
                    <p className={styles.jobready__iconText}><Check /> Your code is reviewed by professionals</p>
                    <p className={classNames(styles.jobready__iconText, styles.my)}> <Check />Accessible education</p>
                    <Button text='Get Started' />

                </div>
            </div>
        </section>
    )
}
