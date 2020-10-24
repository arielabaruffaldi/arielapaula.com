import React from 'react';
import Typed from 'react-typed';
import style from "./Home.module.scss"
import Subtitle from "./../../components/Subtitle/Subtitle"
import Flecha from '../../components/Flecha/Flecha';

const Home = () => {
    return (
        <section className={style.Home}>
            <div>
                <Subtitle></Subtitle>
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

    )
}

export default Home;