import React, { useRef, useEffect } from 'react';
import PortfolioCard from './PortfolioCard/PortfolioCard';
import styles from "./PortfolioGaleria.module.scss";
import Bubble from '../../components/Bubble/Bubble'
import { TimelineLite, TweenMax, Power3, Sine } from "gsap"

function tweenItem(array) {
    TweenMax.to(array, 2, {
        y: "-=20px",
        yoyo: true,
        repeat: -1,
        ease: Sine.easeInOut,
    })
}


const PortfolioGaleria = ({ trabajos }) => {
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
        const buble8 = bubles.children[7]
        const buble9 = bubles.children[8]
        const buble10 = bubles.children[9]
        const buble11 = bubles.children[10]
        const buble12 = bubles.children[11]


        const bublesArray = [
            buble1,
            buble2,
            buble3,
            buble4,
            buble5,
            buble6,
            buble7,
            buble8,
            buble9,
            buble10,
            buble11,
            buble12,
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
                <Bubble width={500} x={-100} y={250} opacity={.2} ></Bubble>
                <Bubble width={350} x={800} y={450} opacity={.2} ></Bubble>
                <Bubble width={500} x={300} y={950} opacity={.2} ></Bubble>
                <Bubble width={350} x={800} y={450} opacity={.2} ></Bubble>
                <Bubble width={150} x={800} y={1050} opacity={.5} color={"#FFC926"}></Bubble>
                <Bubble width={350} x={-50} y={1800} opacity={.2} ></Bubble>
                <Bubble width={150} x={800} y={1800} opacity={.5} color={"#FFC926"}></Bubble>
                <Bubble width={350} x={300} y={2800} opacity={.5} color={"#FFC926"}></Bubble>
                <Bubble width={50} x={-20} y={400} opacity={.4} color={"#FFC926"} ></Bubble>
                <Bubble width={60} x={300} y={800} opacity={.4} color={"#FFC926"} ></Bubble>
                <Bubble width={100} x={-10} y={1200} opacity={.4} color={"#FFC926"} ></Bubble>
                <Bubble width={60} x={380} y={1700} opacity={.4} color={"#FFC926"} ></Bubble>
            </div>
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