import React from 'react';
import ServiceWhatWeDo from '../../components/ServiceWhatWeDo/ServiceWhatWeDo';
import Text from "./../../components/Text/Text";
import styles from "./Servicios.module.scss";
import { Parallax } from 'react-scroll-parallax';
import Subtitle from "./../../components/Subtitle/Subtitle"
import ParagraphSection from "./../../components/ParagraphSection/ParagraphSection";



const Servicios = () => {

    return (
        <>
            <section className={styles.Servicios}>
                <Parallax y={[-40, 10]}>
                    <Subtitle separator hasPadding text="Servicios" secondaryText="Ariela Baruffaldi" priority={1}></Subtitle>
                </Parallax>
                <Parallax y={[140, -100]}>
                    <ParagraphSection color="black" hasPadding customClass={styles.ServiciosParagraph}>Maquetado, diseño y desarrollo de sitios web desde cero enfocados en una interfaz cómoda de navegar e intuitiva. </ParagraphSection>
                </Parallax>
            </section>
            <ServiceWhatWeDo></ServiceWhatWeDo>
        </>
    )
}

export default Servicios