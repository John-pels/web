import Image from 'next/image'
import { Ratings, SliderButton } from '../Icons/misc'
import styles from './style.module.scss'

export const SuccessStories = () => {
    return (
        <section className={styles.stories}>
            <div className='container-fluid'>
                <div className={styles.stories__flex}>
                    <div className={styles.stories__flexItem}>
                        <Image
                            src='/images/success_image.svg'
                            alt='success stories'
                            width={500}
                            height={500}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover'
                            }} />
                    </div>
                    <div className={styles.stories__flexItem}>
                        <div className={styles.stories__content}>
                            <h3 className={styles.stories__contentHeading}>Success Stories from Future Leaders</h3>
                            <p className={styles.stories__contentMessage}>“I was happiest when I would finally succeed in fixing a bug or getting some tricky code to work perfectly after many hours of struggle.”</p>
                            <div className={styles.stories__teller}>
                                <div className={styles.stories__tellerImage}>
                                    <Image
                                        src='/images/teller.svg'
                                        alt='success stories'
                                        width={50}
                                        height={50}
                                        style={{
                                            width: '100%',
                                            height: '100%'
                                        }} />
                                </div>
                                <div className={styles.stories__tellerInfo}>
                                    <p className={styles.stories__tellerName}>Evans David <Ratings /></p>
                                    <p className={styles.stories__tellerRole}>Real Estate Agent to Junior Full Stack Web Developer</p>
                                </div>
                            </div>
                            <div className={styles.btn}>
                                <span className={styles.prevBtn}>
                                    <SliderButton />
                                </span>
                                <span className={styles.nextBtn}>
                                    <SliderButton />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
