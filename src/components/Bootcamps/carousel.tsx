'use client';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React, { FC } from 'react'
import { Check, SliderButton } from '../Icons/misc'
import styles from './style.module.scss'
import Image from 'next/image'
import { Button } from '@components/Button'

interface ICarousel {
    headingText?: string | React.ReactNode
}
export const Carousel: FC<ICarousel> = ({
    headingText = <>Our online coding bootcamps will take you from absolute beginner to job-ready in just 3 <br /> to 6 months.</>
}) => {
    const customSlider = React.useRef<any>();

    const previous = () => {
        customSlider.current.slickNext();
    };

    const next = () => {
        customSlider.current.slickPrev();
    };
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        appendDots: (dots: any) => {
            return <ul style={{ margin: "0px" }}>{dots}</ul>;
        },
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <section className={styles.carousel}>
            <div className={styles.carousel__header}>
                <p className={styles.carousel__headerText}>{headingText}</p>
                <div className={styles.carouselBtn}>
                    <span className={styles.carouselBtnPrev}>
                        <SliderButton onClick={previous} />
                    </span>
                    <span className={styles.carouselBtnNext}>
                        <SliderButton onClick={next} />
                    </span>
                </div>
            </div>
            <Slider {...settings} ref={customSlider}>
                {
                    React.Children.toArray([...new Array(5)].map(() => (
                        <section className={styles.carousel__grid}>
                            <div className={styles.carousel__gridCard}>
                                <div className={styles.carousel__gridCardImage}>
                                    <Image
                                        src='/images/certified_fullstack.svg'
                                        alt='carousel image'
                                        width={100}
                                        priority
                                        height={100}
                                        style={{
                                            width: '100%',
                                            height: '100%'
                                        }} />
                                </div>
                                <h5 className={styles.carousel__gridCardTitle}>Certified Full Stack Web & Software Engineer Bootcamp</h5>
                                <p className={styles.carousel__gridCardDesc}>Learn to create complex and powerful
                                    software, apps, and websites in our most advanced Immersive bootcamp.</p>
                                <div className={styles.carousel__gridCardDuration}>
                                    <span className={styles.carousel__gridCardType}><Check /> 12 months part-time</span>
                                    <span className={styles.carousel__gridCardType}><Check />  12 months part-time</span>
                                </div>
                                <Button text='Explore More' isFluid showArrow variant="outline" />
                            </div>
                        </section>
                    )))
                }


            </Slider>
        </section>
    )
}
