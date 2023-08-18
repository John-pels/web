import styles from "./style.module.scss"
import { Button } from ".."
import { Play } from "../Icons/Play"
import Image from "next/image"
import { Kite, Mask, Pyramid, Star, Triangle } from "../Icons/misc"
import { Rating } from "./rating"
import { Stat } from "../Icons/Stat"

export const Header = () => {
    return (
        <header className='container-fluid'>
            <section className={styles.header}>
                <div className={styles.header__item}>
                    <div className={styles.header__heroTag}>JOIN 1.5K RECENT STUDENT</div>
                    <h1 className={styles.header__heroText}>Boost your <span>Digital Skillset</span> Online...</h1>
                    <p className={styles.header__subHeroText}>
                        Enhance your digital skillset through our
                        comprehensive online courses, empowering you to navigate the digital landscape with confidence. </p>
                    <div className={styles.header__btnFlex}>
                        <Button text="Begin Trial" />
                        <div className={styles.header__btnVideo}>
                            <Play /> Watch Video
                        </div>
                    </div>
                    <Kite className={styles.kite} />
                </div>
                <div className={styles.header__item}>
                    <div className={styles.div1}>
                        <Image
                            src='/images/lady.svg'
                            priority
                            alt="lady"
                            sizes="100vw"
                            style={{
                                width: '100%',
                                height: '100%',
                            }}
                            width={500}
                            height={300}
                        />
                    </div>
                    <div className={styles.div2}>
                        <Stat />
                        <span className={styles.statistics}>35k</span>
                        <span className={styles.header__itemDuration}>Trained in 2022</span>
                    </div>
                    <div className={styles.div3}>
                        <Image
                            src='/images/lady_with_headset.svg'
                            alt="lady"
                            priority
                            sizes="100vw"
                            style={{
                                width: '100%',
                                height: '100%',
                            }}
                            width={500}
                            height={400}
                        />
                    </div>
                    <div className={styles.div4}>
                        <Stat />
                        <span className={styles.statistics}>50k</span>
                        <span className={styles.header__itemDuration}>Trained in 2021</span>

                    </div>
                    <div className={styles.div5}>
                        <Image
                            src='/images/guy.svg'
                            priority
                            alt="guy"
                            sizes="100vw"
                            style={{
                                width: '100%',
                                height: '100%',
                            }}
                            width={500}
                            height={200}
                        />
                    </div>
                    <Star className={styles.star1} />
                    <Star className={styles.star2} />
                    <Pyramid className={styles.pyramid1} />
                    <Pyramid className={styles.pyramid2} />
                    <Mask className={styles.mask1} />
                    <Mask className={styles.mask2} />
                    <Triangle className={styles.triangle} />
                </div>
            </section>
            <Rating />
        </header>
    )
}
