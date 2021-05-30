import React, { useState, useEffect } from 'react';
import PortfolioCard from './PortfolioCard/PortfolioCard';
import styles from "./PortfolioGaleria.module.scss";
import SwiperCore, { Navigation, Pagination, Scrollbar, Mousewheel } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/navigation/navigation.scss';

SwiperCore.use([Pagination, Scrollbar, Mousewheel]);

const PortfolioGaleria = ({ trabajos }) => {
    const [itemId, setItemId] = useState(0);

    return (
        <>
            <section
                className={`${styles.PortfolioGaleria} portfolioGaleria`}>
                <div style={{ backgroundImage: `url(${trabajos[itemId].path}/${trabajos[itemId].thumb})` }} className={styles.bgImg}>

                </div>
                <Swiper
                    direction="horizontal"
                    slidesPerView={1}
                    onSlideChange={(slide) => setItemId(slide.activeIndex)}
                    mousewheel={{ forceToAxis: true, sensitivity: 1.5 }}
                    centeredSlides={true}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                            navigation: false,
                            direction:"vertical"

                        }
                    }}

                >

                    {
                        trabajos.map((trabajo, index) =>
                            <SwiperSlide index={index} key={index}>
                                {({ isActive }) => (
                                    <>
                                        {console.log(trabajo)}
                                        <PortfolioCard
                                            title={trabajo.title}
                                            id={trabajo.id}
                                            key={trabajo.id}
                                            href={`proyectos/${trabajo.pathUrl}`}
                                            /*  handleHover={handleHover} */
                                            type={trabajo.type}
                                            isActive={isActive}
                                        >
                                        </PortfolioCard>
                                    </>
                                )}
                            </SwiperSlide>
                        )
                    }
                </Swiper>
            </section>
        </>
    )
}

export default PortfolioGaleria;