import React from 'react';
import Subtitle from "./../../components/Subtitle/Subtitle"
import styles from "./Portfolio.module.scss";
import 'swiper/swiper.scss';
import PortfolioGaleria from '../../components/PortfolioGaleria/PortfolioGaleria';
import ParagraphSection from "./../../components/ParagraphSection/ParagraphSection"
import { trabajos } from "./../../utils/trabajos";
import { Parallax } from 'react-scroll-parallax';

const Portfolio = () => {
    return (
        <>
            <section className={styles.Portfolio}>
                <Parallax y={[-10, 10]}>
                    <Subtitle text="Proyectos" secondaryText="Ariela Baruffaldi" priority={1}></Subtitle>
                </Parallax>
                <Parallax y={[40, -40]}>
                    <ParagraphSection hasPadding customClass={styles.Paragraph}>Algunos de los últimos proyectos. Abarcando en la gran mayoría tanto el desarrollo como el diseño de la interfaz.</ParagraphSection>
                </Parallax>
            </section>

            <PortfolioGaleria trabajos={trabajos}></PortfolioGaleria>
        </>
    )
}

export default Portfolio