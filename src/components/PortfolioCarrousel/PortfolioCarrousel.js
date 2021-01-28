import SwiperCore, { Navigation, Pagination, Scrollbar, Mousewheel } from 'swiper';

import React, { useRef, useEffect, useState } from 'react';
import styles from './PortfolioCarrousel.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';

import { TimelineLite, TweenMax, Power3, Sine } from "gsap"
import Bubble from '../../components/Bubble/Bubble'

SwiperCore.use([Navigation, Pagination, Scrollbar, Mousewheel]);

function tweenItem(array) {
    TweenMax.to(array, 2, {
        y: "-=20px",
        yoyo: true,
        repeat: -1,
        ease: Sine.easeInOut,
    })
}

const PortfolioCarrousel = ({ trabajos, color }) => {
    let bubles = useRef(null)
    let tl = new TimelineLite({ delay: 0.3 })

    useEffect(() => {
        const buble1 = bubles.children[0]
        const buble2 = bubles.children[1]
        const bublesArray = [
            buble1,
            buble2
        ]
        tl.staggerFrom(
            bublesArray,
            1,
            {
                scale: 1.2,
                opacity: 0,
                ease: Power3.easeOut
            },
            0.8
        )
        tweenItem(bublesArray)

    }, [tl])

    const onMouseEnter = (e) => {
        console.log(e)
    };

    useEffect(() => {
        window.addEventListener('mouseenter', onMouseEnter);
        return () => document.removeEventListener("mouseenter", onMouseEnter);
    }, [])

    const [itemId, setItemId] = useState(0)
    return (
        <>
            <div ref={el => (bubles = el)}>
                <Bubble width={100} x={100} y={250} opacity={.2} color={"#FFC926"}></Bubble>
                <Bubble width={300} x={800} y={450} opacity={.2}></Bubble>
            </div>
            <div className={
                `${styles.PortfolioCarrousel} ${color ? styles[color] : ""}`
            }>
                <Swiper
                    spaceBetween={30}
                    slidesPerView={2}
                    onSlideChange={(slide) => setItemId(slide.activeIndex)}
                    mousewheel={{ forceToAxis: true, sensitivity: 0.5 }}
                    forceToAxis={true}
                    centeredSlides={true}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 50

                        }
                    }}
                onSwiper={(swiper) => console.log(swiper)}
                >
                    {trabajos.map((trabajo, index) => {
                        return (
                            <>
                                <SwiperSlide key={index}>
                                    {({ isActive }) => (
                                        <>
                                            <a href={`${trabajo.url}`} onMouseEnter = {(e)=>onMouseEnter(e)}>
                                                <div className={styles.swiperContainer}>
                                                    {isActive ?
                                                        <>
                                                            <h2 className={styles.titleActive}>{trabajo.title}</h2>
                                                        </> :
                                                        <h2>{trabajo.title}</h2>
                                                    }
                                                </div>
                                            </a>
                                        </>
                                    )}
                                </SwiperSlide>
                            </>
                        )
                    })}
                    <div style={{ backgroundImage: `url(${trabajos[itemId].thumb})` }} className={styles.divBg}></div>
                </Swiper>
            </div >
        </>
    )
}

export default PortfolioCarrousel;