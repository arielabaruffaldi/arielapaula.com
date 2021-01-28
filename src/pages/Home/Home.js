import React, { useRef, useEffect } from 'react';
import Typed from 'react-typed';
import style from "./Home.module.scss"
import Subtitle from "./../../components/Subtitle/Subtitle"
import PortfolioCarrousel from './../../components/PortfolioCarrousel/PortfolioCarrousel';
import { ultimosTrabajos } from "./../../utils/trabajos";
import SectionWrapper from '../../components/SectionWrapper/SectionWrapper';
import Button from '../../components/Button/Button';
import { Parallax } from 'react-scroll-parallax';
import Link from '../../components/Link/Link'
import { useMediaQuery } from 'react-responsive';
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

const Home = () => {
    const isMobile = useMediaQuery({
        query: '(max-width: 660px)'
    })

    let bubles = useRef(null)
    let tl = new TimelineLite({ delay: 0.3 })

    useEffect(() => {

        const buble1 = bubles.children[0]
        const buble2 = bubles.children[1]


        const bublesArray = [
            buble1,
            buble2
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
            <div ref={el => (bubles = el)}>
                <Bubble width={300} x={700} y={250} opacity={.2} color={"#FFC926"}></Bubble>
                <Bubble width={200} x={500} y={450} opacity={.2}></Bubble>
            </div>
         {/*    <div className={style.homeBg}> </div> */}
            <SectionWrapper hasPadding className={style.Home}>
                <div>
                    {!isMobile ? <Parallax y={["-20px", "20px"]}>
                        <h1>
                            {`desarrollo de `}
                            <Typed
                                strings={[
                                    'aplicaciones',
                                    'páginas web',
                                    'e-commerce']}
                                typeSpeed={110}
                                backSpeed={60}
                                backDelay={800}
                                showCursor={false}
                                tagInner="div"
                                loop >
                            </Typed>
                        </h1>
                    </Parallax> :
                        <h1>
                            {`desarrollo de `}
                            <Typed
                                strings={[
                                    'aplicaciones',
                                    'páginas web',
                                    'e-commerce']}
                                typeSpeed={110}
                                backSpeed={60}
                                backDelay={800}
                                showCursor={false}
                                tagInner="div"
                                loop >
                            </Typed>
                        </h1>
                    }
                    {!isMobile ?
                        <Parallax y={["40px", "-50px"]}>
                            <Link href="/proyectos" classes={style.verMas}>
                                <Button>ver mas trabajos</Button>
                            </Link>
                        </Parallax> :
                        <Link href="/proyectos" classes={style.verMas}>
                            <Button>ver mas trabajos</Button>
                        </Link>
                    }
                </div>
            </SectionWrapper>
            <SectionWrapper color="dark" className={style.SectionWrapperCarrousel}>
                {!isMobile ?
                    <><Parallax y={["40px", "-40px"]} slowerScrollRate>
                        <Subtitle hasPadding separator text="ultimos proyectos" secondaryText="Desarrollo web" priority={2} ></Subtitle>
                    </Parallax>
                        <Parallax y={["-80px", "50px"]} slowerScrollRate>
                            <PortfolioCarrousel trabajos={ultimosTrabajos} color="dark" />
                        </Parallax>
                    </> :
                    <>
                        <Subtitle hasPadding separator text="ultimos proyectos" secondaryText="Desarrollo web" priority={2} ></Subtitle>
                        <PortfolioCarrousel trabajos={ultimosTrabajos} color="dark" />
                    </>
                }
            </SectionWrapper>
        </>

    )
}

export default Home;