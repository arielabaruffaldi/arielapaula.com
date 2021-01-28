import React from 'react';
import Typed from 'react-typed';
import style from "./Home.module.scss"
import Subtitle from "./../../components/Subtitle/Subtitle"
import PortfolioCarrousel from './../../components/PortfolioCarrousel/PortfolioCarrousel';
import { ultimosTrabajos } from "./../../utils/trabajos";
import SectionWrapper from '../../components/SectionWrapper/SectionWrapper';
import Button from '../../components/Button/Button';
import { Parallax } from 'react-scroll-parallax';
import Link from '../../components/Link/Link'

const Home = () => {
    return (
        <>
            <SectionWrapper hasPadding className={style.Home}>
                <div>
                    <Parallax y={["-20px", "20px"]}>
                        <h1>
                            {`Desarrollo de `}
                            <Typed
                                strings={[
                                    'Aplicaciones',
                                    'Páginas WEB',
                                    'E-commerce']}
                                typeSpeed={110}
                                backSpeed={-50}
                                loop >
                            </Typed>
                        </h1>
                    </Parallax>
                    <Parallax y={["40px", "-50px"]}>
                        <Link href="/proyectos">
                            <Button size={.9}>ver mas trabajos</Button>
                        </Link>
                    </Parallax>
                </div>
            </SectionWrapper>
            <SectionWrapper color="dark" className={style.SectionWrapperCarrousel}>
                <Parallax y={["40px", "-40px"]} slowerScrollRate>
                    <Subtitle hasPadding text="ultimos proyectos" secondaryText="Desarrollo web" priority={2} ></Subtitle>
                </Parallax>
                <Parallax y={["-80px", "50px"]} slowerScrollRate>
                    <PortfolioCarrousel trabajos={ultimosTrabajos} color="dark" />
                </Parallax>
            </SectionWrapper>
        </>

    )
}

export default Home;