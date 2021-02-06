import React, { useRef, useEffect } from 'react';
import PortfolioCard from './PortfolioCard/PortfolioCard';
import styles from "./PortfolioGaleria.module.scss";
import Bubble from '../../components/Bubble/Bubble'
import { TimelineLite, TweenMax, Power3, Sine } from "gsap"
import { Parallax } from "react-scroll-parallax";

function tweenItem(array) {
    TweenMax.to(array, 2, {
        y: "-=20px",
        yoyo: true,
        repeat: -1,
        ease: Sine.easeInOut,
    })
}


const PortfolioGaleria = ({ trabajos }) => {
   
    return (
        <>
            <section className={styles.PortfolioGaleria}>
                {
                    trabajos.map((trabajo, index) => {
                        return (
                            <PortfolioCard
                                title={trabajo.title}
                                key={index}
                                type={trabajo.type}
                                foto={`${trabajo.path}/${trabajo.thumb}`}
                                href={`proyectos/${trabajo.id}`}
                                index={index}
                                trabajo={trabajo}
                            />)
                    })
                }
            </section>
        </>
    )
}

export default PortfolioGaleria;