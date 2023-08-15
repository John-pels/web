import classNames from 'classnames'
import styles from './style.module.scss'
import Image from 'next/image'
import { Facebook, Instagram, LinkedIn, Twitter, Wordpress } from '../Icons/social'
import React from 'react'
import { footerMenu } from './_data'
classNames

export const Footer = () => {
    return (
        <footer className={styles.footer__container}>
            <section className={classNames(styles.footer, 'container-fluid')}>
                <div>
                    <Image src='/images/hyperiondev.svg' width={200} height={50} alt='logo' />
                    <br />
                    <Image src='/images/mict.svg' width={70} height={70} alt='mictseta' />
                    <br />
                    <p className={styles.footer__text}>Full Accreditation</p>
                    <p className={styles.footer__text}>Accreditation Number:</p>
                    <p className={styles.footer__text}>ACC/2017/05/0005</p>
                    <div className={styles.footer__social}>
                        <a href="#" rel='noopener' target='_blank'> <Facebook /></a>
                        <a href="#" rel='noopener' target='_blank'> <Twitter /></a>
                        <a href="#" rel='noopener' target='_blank'>  <LinkedIn /></a>
                        <a href="#" rel='noopener' target='_blank'><Instagram /></a>
                        <a href="#" rel='noopener' target='_blank'> <Wordpress /></a>
                    </div>
                </div>
                <div className={styles.footer__itemGrid}>
                    {
                        React.Children.toArray(footerMenu.map(({ title, links }) => (
                            <div className={styles.footer__menu}>
                                <h3 className={styles.footer__menuTitle}>{title}</h3>
                                {
                                    React.Children.toArray(links.map(({ name, url }) => (

                                        <a href={url} className={styles.footer__menuLink}>{name}</a>
                                    )))
                                }
                            </div>
                        ))
                        )
                    }

                </div>
            </section>
            <hr className={styles.footer__hr} />
            <p className={styles.footer__copyright}>© HyperionDev. All rights reserved.</p>
        </footer>
    )
}

