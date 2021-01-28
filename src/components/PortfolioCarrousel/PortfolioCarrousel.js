import SwiperCore, { Navigation, Pagination, Scrollbar, Mousewheel } from 'swiper';

import React, { useState } from 'react';
import styles from './PortfolioCarrousel.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, Mousewheel]);


const PortfolioCarrousel = ({ trabajos, color }) => {
    const [itemId, setItemId] = useState(0)
    return (
        <div className={
            `${styles.PortfolioCarrousel} ${color ? styles[color] : ""}`
        }>
            <Swiper
                spaceBetween={140}
                slidesPerView={3}
                onSlideChange={(slide) => setItemId(slide.activeIndex)}
                mousewheel={{ forceToAxis: true, sensitivity: 0.5 }}
                forceToAxis={true}
                centeredSlides={true}
                breakpoints={{
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 190

                    }
                }}
            /* onSwiper={(swiper) => console.log(swiper)} */
            >
                {trabajos.map((trabajo, index) => {
                    return (
                        <>
                            <SwiperSlide key={index}>
                                {({ isActive }) => (
                                    <>
                                        <a href={`${trabajo.url}`}>
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
    )
}

export default PortfolioCarrousel;