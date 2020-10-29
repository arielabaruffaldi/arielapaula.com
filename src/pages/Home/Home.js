import React from 'react';
import Typed from 'react-typed';
import style from "./Home.module.scss"
import Subtitle from "./../../components/Subtitle/Subtitle"
import Flecha from './../../components/Flecha/Flecha';
import PortfolioCarrousel from './../../components/PortfolioCarrousel/PortfolioCarrousel';
import { ultimosTrabajos } from "./../../utils/trabajos";
import SectionWrapper from '../../components/SectionWrapper/SectionWrapper';

const Home = () => {
    return (
        <>
            <SectionWrapper hasPadding className={style.Home}>
                <div>
                    <h1>
                        {`Desarrollamos `}
                        <Typed
                            strings={[
                                'Aplicaciones',
                                'Páginas WEB',
                                'E-commerce']}
                            typeSpeed={40}
                            backSpeed={50}
                            loop >
                        </Typed>
                    </h1>
                    <Flecha hasHover={true} text={"ver trabajos"}></Flecha>
                </div>
            </SectionWrapper>
            <SectionWrapper color="dark" className={style.SectionWrapperCarrousel}>
                <Subtitle hasPadding text="ultimos proyectos" secondaryText="somos un estudio blabla" priority={2} ></Subtitle>
                <PortfolioCarrousel trabajos={ultimosTrabajos} color="dark" />
            </SectionWrapper>
        </>

    )
}

export default Home;