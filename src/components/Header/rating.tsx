import Image from 'next/image'
import styles from './style.module.scss'
import Ratings from '../Icons/misc'



export const Rating = () => (
    <section className={styles.rating}>
        <h5 className={styles.rating__heading}>Some of the awards we’ve gotten across the world</h5>
        <div className={styles.rating__flex}>
            <div className={styles.rating__brand}>

                <Image src='/images/bestboot.svg' width={60} height={60} alt='best bootcamp' />
                <div>
                    <p className={styles.rating__brandName}>Best Bootcamp Winner</p>
                    <span><Ratings />4.7/5</span>
                </div>
            </div>
            <div className={styles.rating__brand}>
                <Image src='/images/best_online.svg' width={60} height={60} alt='best online bootcamp' />
                <div>
                    <p className={styles.rating__brandName}>Best Online Bootcamp Winner</p>
                    <span><Ratings />4.7/5</span>
                </div>
            </div>
            <div className={styles.rating__brand}>
                <Image src='/images/google.svg' width={60} height={60} alt='Google' />
                <div>
                    <p className={styles.rating__brandName}>Google Reviews</p>
                    <span><Ratings />4.8/5</span>
                </div>
            </div>
        </div>
    </section>
)
