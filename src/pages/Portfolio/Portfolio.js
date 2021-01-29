import React, { useRef, useEffect } from 'react';
import Subtitle from "./../../components/Subtitle/Subtitle"
import styles from "./Portfolio.module.scss";
import 'swiper/swiper.scss';
import PortfolioGaleria from '../../components/PortfolioGaleria/PortfolioGaleria';
import ParagraphSection from "./../../components/ParagraphSection/ParagraphSection"
import { trabajos } from "./../../utils/trabajos";
import { Parallax } from 'react-scroll-parallax';
import Bubble from '../../components/Bubble/Bubble'
import { TimelineLite, TweenMax, Power3, Sine } from "gsap"
import { useMediaQuery } from 'react-responsive'

function tweenItem(array) {
    TweenMax.to(array, 2, {
        y: "-=20px",
        yoyo: true,
        repeat: -1,
        ease: Sine.easeInOut,
    })
}


const Portfolio = () => {
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


        const bublesArray = [
            buble1,
            buble2,
            buble3,
            buble4
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
            {!isMobile ?
                <div ref={el => (bubles = el)}>
                    <Bubble width={100} x={800} y={250} opacity={.2} ></Bubble>
                    <Bubble width={50} x={900} y={150} opacity={.2} ></Bubble>
                    <Bubble width={30} x={900} y={350} opacity={.2} ></Bubble>
                    <Bubble width={500} x={1000} y={250} opacity={.2} color={"#FFC926"}></Bubble>
                </div>
                :
                <div ref={el => (bubles = el)}>
                    <Bubble width={80} x={300} y={100} opacity={.2} ></Bubble>
                    <Bubble width={40} x={330} y={150} opacity={.5} color={"#FFC926"}></Bubble>
                    <Bubble width={80} x={-10} y={650} opacity={.2} color={"#FFC926"}></Bubble>
                </div>
            }
            <section className={styles.Portfolio}>
                {!isMobile ?
                    <>
                        <Parallax y={[-10, 10]}>
                            <Subtitle separator text="Proyectos" secondaryText="Ariela Baruffaldi" priority={1}></Subtitle>
                        </Parallax>
                        <Parallax y={[40, -40]}>
                            <ParagraphSection hasPadding customClass={styles.Paragraph}>Algunos de los últimos proyectos. Abarcando en la gran mayoría tanto el desarrollo como el diseño de la interfaz.</ParagraphSection>
                        </Parallax>
                    </>
                    :
                    <>
                        <Subtitle separator text="Proyectos" secondaryText="Ariela Baruffaldi" priority={1}></Subtitle>
                        <ParagraphSection hasPadding customClass={styles.Paragraph}>Algunos de los últimos proyectos. Abarcando en la gran mayoría tanto el desarrollo como el diseño de la interfaz.</ParagraphSection>
                    </>
                }
            </section>

            <PortfolioGaleria trabajos={trabajos}></PortfolioGaleria>
        </>
    )
}

export default Portfolio