import React, { useState } from 'react';
import Subtitle from "./../../components/Subtitle/Subtitle"
import styles from "./Portfolio.module.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import PortfolioCarrousel from '../../components/PortfolioCarrousel/PortfolioCarrousel';

const trabajos = [
    {
        title: "uno",
        foto: "assets/1.jpg",
        href: "",
    },
    {
        title: "dos",
        foto: "assets/2.jpg",
        href: "",
    },
    {
        title: "tres",
        foto: "assets/3.jpg",
        href: "",
    },
    {
        title: "cuatro",
        foto: "assets/1.jpg",
        href: "",
    },
    {
        title: "cinco",
        foto: "assets/2.jpg",
        href: "",
    }
]
const Portfolio = () => {
    return (
        <section className={styles.Portfolio}>
            <Subtitle text="ultimos proyectos" secondaryText="somos un estudio blabla" etiqueta="h1"></Subtitle>
            <PortfolioCarrousel trabajos={trabajos}></PortfolioCarrousel>
        </section>
    )
}

export default Portfolio