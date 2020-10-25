import React from 'react';
import Typed from 'react-typed';
import style from "./Home.module.scss"
import Subtitle from "./../../components/Subtitle/Subtitle"
import Flecha from './../../components/Flecha/Flecha';
import PortfolioCarrousel from './../../components/PortfolioCarrousel/PortfolioCarrousel';


const trabajos = [
    {
        title: "uno",
        foto: "assets/1.jpg",
        href: "",
    },
    {
        title: "dos",
        foto: "assets/2.jpg",
        href: "",
    },
    {
        title: "tres",
        foto: "assets/3.jpg",
        href: "",
    },
    {
        title: "cuatro",
        foto: "assets/1.jpg",
        href: "",
    },
    {
        title: "cinco",
        foto: "assets/2.jpg",
        href: "",
    }
]

const Home = () => {
    return (
        <>
        <section className={style.Home}>
            <div>
                <h1>
                    {`Diseño y desarrollo de `}
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
        </section>
        <section>
        <Subtitle text="ultimos proyectos" secondaryText="somos un estudio blabla"></Subtitle>
        <PortfolioCarrousel trabajos={trabajos}></PortfolioCarrousel>
        </section>
        </>

    )
}

export default Home;