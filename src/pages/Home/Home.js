import React from 'react';
import Typed from 'react-typed';
import style from "./Home.module.scss"

const Home = () => {
    return (
        <section className={style.Home}>
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
        </section>

    )
}

export default Home;