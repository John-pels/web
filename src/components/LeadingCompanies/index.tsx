import Image from 'next/image'
import { Button } from '..'
import styles from './style.module.scss'
import React from 'react'

const _brandImages = [
    'amazon.svg', 'fnb.svg', 'eoh.svg', 'ey.svg', 'finchoice.svg',
    'sweepsouth.svg', 'nedbank.svg', 's.svg', 'stanbic.svg',
    'digi.svg', 'ecom.svg', 'nikon.svg', 'ibm.svg',
    'investee.svg', 'mycomax.svg', 'vitality.svg',
    'vmg.svg', 'image.svg', 'ts.svg']

export const LeadingCompanies = () => {
    return (
        <section className="container-fluid">
            <section className={styles.companies}>
                <section className={styles.companies__item}>
                    <h2 className={styles.companies__itemHeading}>Leading Companies Hire Our Graduates.</h2>
                    <p className={styles.companies__itemSubHeading}>Our graduates complete their bootcamps knowing how to do the jobs that the industry
                        is hiring for. Today, they work at some of the top tech companies and start-ups in the world.</p>
                    <Button text='Download Report' />
                </section>
                <section className={styles.companies__item}>
                    {
                        React.Children.toArray(_brandImages.map(image => (
                            <Image
                                src={`/images/${image}`}
                                alt='brand logo'
                                width={40}
                                height={40}
                                style={{
                                    width: 'auto',
                                    height: 'auto'
                                }}
                            />
                        )))
                    }

                </section>

            </section>
            <section className={styles.cta}>
                <h2 className={styles.cta__heading}>Join more than 100,000 students who have registered to learn to code at HyperionDev.</h2>
                <div className={styles.btnFlex}>
                    <Button text='Apply Now' />
                    <Button text='Contact Us' variant='outline0' />
                </div>
            </section>
        </section>
    )
}
