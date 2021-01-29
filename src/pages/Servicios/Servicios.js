import React, { useRef, useEffect } from 'react';
import ServiceWhatWeDo from '../../components/ServiceWhatWeDo/ServiceWhatWeDo';
import Text from "./../../components/Text/Text";
import styles from "./Servicios.module.scss";
import { Parallax } from 'react-scroll-parallax';
import Subtitle from "./../../components/Subtitle/Subtitle"
import ParagraphSection from "./../../components/ParagraphSection/ParagraphSection";
import Bubble from '../../components/Bubble/Bubble'
import { TimelineLite, TweenMax, Power3, Sine } from "gsap";
import { useMediaQuery } from 'react-responsive'


function tweenItem(array) {
    TweenMax.to(array, 2, {
        y: "-=20px",
        yoyo: true,
        repeat: -1,
        ease: Sine.easeInOut,
    })
}


const Servicios = () => {
    const isMobile = useMediaQuery({
        query: '(max-width: 660px)'
    })
    
    let bubles = useRef(null)
    let tl = new TimelineLite({ delay: 0.1 })

    useEffect(() => {

        const buble1 = bubles.children[0]
        const buble2 = bubles.children[1]
        const buble3 = bubles.children[2]
        const buble4 = bubles.children[3]
        const buble5 = bubles.children[4]
        const buble6 = bubles.children[5]
        const buble7 = bubles.children[6]

        const bublesArray = [
            buble1,
            buble2,
            buble3,
            buble4,
            buble5,
            buble6,
            buble7
        ]


        tl.staggerFrom(
            bublesArray,
            1,
            {
                scale: 1.2,
                opacity: 0,
                ease: Power3.easeOut
            },
            0.2
        )
        tweenItem(bublesArray)

    }, [tl])
    return (
        <>
            <div ref={el => (bubles = el)}>
                <Bubble width={100} x={800} y={250} opacity={.4} color={"#cacaca"} ></Bubble>
                <Bubble width={50} x={900} y={150} opacity={.6} color={"#FFC926"} ></Bubble>
                <Bubble width={30} x={900} y={350} opacity={.6} color={"#FFC926"} ></Bubble>
                <Bubble width={500} x={1000} y={250} opacity={.4} color={"#cacaca"}></Bubble>
                <Bubble width={300} x={-100} y={1000} opacity={.2} color={"#cacaca"}></Bubble>
                <Bubble width={150} x={980} y={1500} opacity={.2} color={"#cacaca"}></Bubble>
                <Bubble width={80} x={1100} y={1500} opacity={.6} color={"#FFC926"}></Bubble>
            </div>
            <section className={styles.Servicios}>
                {!isMobile ?
                    <>
                        <Parallax y={[-40, 10]}>
                            <Subtitle customClass={styles.ServiciosSubtitle} separator hasPadding text="Servicios" secondaryText="Ariela Baruffaldi" priority={1}></Subtitle>
                        </Parallax>
                        <Parallax y={[140, -100]}>
                            <ParagraphSection color="black" hasPadding customClass={styles.ServiciosParagraph}>Maquetado, diseño y desarrollo de sitios web desde cero enfocados en una interfaz cómoda de navegar e intuitiva. </ParagraphSection>
                        </Parallax>
                    </>
                    :
                    <>
                        <Subtitle customClass={styles.ServiciosSubtitle} separator hasPadding text="Servicios" secondaryText="Ariela Baruffaldi" priority={1}></Subtitle>
                        <ParagraphSection color="black" hasPadding customClass={styles.ServiciosParagraph}>Maquetado, diseño y desarrollo de sitios web desde cero enfocados en una interfaz cómoda de navegar e intuitiva. </ParagraphSection>
                    </>
                }
            </section>
            <ServiceWhatWeDo></ServiceWhatWeDo>
        </>
    )
}

export default Servicios