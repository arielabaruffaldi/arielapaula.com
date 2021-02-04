import React, { useRef, useEffect, useState } from 'react';
import Typed from 'react-typed';
import style from "./Error.module.scss"
import SectionWrapper from '../../components/SectionWrapper/SectionWrapper';
import Button from '../../components/Button/Button';
import Link from '../../components/Link/Link'
import { useMediaQuery } from 'react-responsive';
import Bubble from '../../components/Bubble/Bubble'
import { TimelineLite, TweenMax, Power3, Sine } from "gsap";


function tweenItem(array) {
    TweenMax.to(array, 2, {
        y: "-=20px",
        yoyo: true,
        repeat: -1,
        ease: Sine.easeInOut,
    })
}

const Error = () => {
    const [finished, setFinished] = useState(false)
    const isMobile = useMediaQuery({
        query: '(max-width: 660px)'
    })
    let bubles = useRef(null)
    let tl = new TimelineLite({ delay: 0.3 })

    useEffect(() => {

        const buble1 = bubles.children[0]
        const buble2 = bubles.children[1]
        const buble3 = bubles.children[2]
        const bublesArray = [
            buble1,
            buble2,
            buble3
        ]


        tl.staggerFrom(
            bublesArray,
            1,
            {
                scale: 1.2,
                opacity: 0,
                ease: Power3.easeOut
            },
            0.4
        )
        tweenItem(bublesArray)

    }, [tl])

    return (
        <>
            {!isMobile ?
                <div ref={el => (bubles = el)}>
                    <Bubble width={300} x={800} y={250} opacity={.2}></Bubble>
                    <Bubble width={200} x={100} y={450} opacity={.2}></Bubble>
                    <Bubble width={80} color="#FFC926" x={100} y={450} opacity={.2}></Bubble>
                </div>
                :
                <div ref={el => (bubles = el)}>
                    <Bubble width={100} x={200} y={100} opacity={.2} color={"#FFC926"}></Bubble>
                    <Bubble width={50} x={280} y={180} opacity={.2}></Bubble>
                    <Bubble width={150} x={-80} y={480} opacity={.2}></Bubble>
                </div>
            }
            <SectionWrapper hasPadding className={style.Error}>
                    <h1>
                        <Typed
                            strings={[
                                'Oops',
                                'Te perdiste',
                                '404']}
                            typeSpeed={70}
                            backSpeed={60}
                            backDelay={800}
                            showCursor={false}
                            tagInner="div"
                            onComplete={() => setFinished(true)}
                        >
                        </Typed>
                    </h1>
                    {finished && <Link href="/" classes={style.irInicioBtn}>
                        <Button>Ir al inicio</Button>
                    </Link>}
            </SectionWrapper>
        </>
    )
}

export default Error;