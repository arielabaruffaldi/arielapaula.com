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
    const [img, setImg] = useState(`${trabajos[0].path}/${trabajos[0].thumb}`);

    /*     const handleHover = (id) => {
            const hoveredItem = trabajos.find((trabajo) => trabajo.id === id);
            setImg(`${hoveredItem.path}/${hoveredItem.thumb}`)
        }
     */
    console.log(itemId)
    return (
        <>
            <section
                className={`${styles.PortfolioGaleria} portfolioGaleria`}
                style={{ backgroundImage: `url(${trabajos[itemId].path}/${trabajos[itemId].thumb})` }}
            >
                {/*  <img src={hoveredImg} alt={'imagen'} className = {styles.PortfolioGaleriaImg} /> */}
                <Swiper
                    direction="vertical"
                    slidesPerView={1}
                    onSlideChange={(slide) => setItemId(slide.activeIndex)}
                    mousewheel={{ forceToAxis: true, sensitivity: 1.5 }}
                    centeredSlides={true}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                            navigation: false
                        }
                    }}

                >

                    {
                        trabajos.map((trabajo, index) =>
                            <SwiperSlide index={index} key={index}>
                                {({ isActive }) => (
                                    <>
                                        {/* {
                                            console.log("isActive", trabajo)
                                        } */}
                                        <PortfolioCard
                                            title={trabajo.title}
                                            id={trabajo.id}
                                            key={trabajo.id}
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