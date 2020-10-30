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
                <Parallax y={[-50, 50]}>
                    <Subtitle text="Portfolio" secondaryText="somos un estudio blabla" priority={1}></Subtitle>
                </Parallax>
                <Parallax y={[60, -40]}>
                    <ParagraphSection hasPadding className={styles.Paragraph}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</ParagraphSection>
                </Parallax>
            </section>

            <PortfolioGaleria trabajos={trabajos}></PortfolioGaleria>
        </>
    )
}

export default Portfolio