import React from 'react';
import ServiceCard from './../ServiceCard/ServiceCard';
import "./ServiceWhatWeDo.scss";
import { Parallax, ParallaxBanner } from 'react-scroll-parallax';

const servicios = [
    {
        icon: '"./test.jpg"',
        title: "Desarrollo web",
        listItems: [
            "Diseño y desarrollo de páginas web",
            "Posibilidad de desarrollar un administrador",
            "Diseño y desarrollo de campañas de e-mail Marketing."
        ]
    },
    {
        icon: '"./test.jpg"',
        title: "Desarrollo e-commerce",
        listItems: [
            "Desarrollo de e-commerces en las últimas tecnologías: ",
            "Vtex IO",
            "Magento",
            "Wordpress"
        ]
    },
]

const ServiceWhatWeDo = () => {
    return (
        <section className="servicios">
            {/* <ServiceCard items={servicios}></ServiceCard> */}
            <div className="servicios-item-wrapper">
                <div className="text-service-parallax text-service">
                    <div className="servicios-separador parallaxAll" data-parallax="0.01">
                        <h5 className="font3">Desarrollo WEB</h5>
                        <span className="dash"></span>
                    </div>
                    <p className="servicios-descripcion parallaxAll" data-parallax="0.03"> Diseño y desarrollo de: </p>
                    <ul className="servicios-items">
                        <li>lading pages</li>
                        <li>páginas institucionales</li>
                        <li>páginas autoadministrables</li>
                    </ul>
                </div>
               {/*  <Parallax y={["-50px", "20px"]}> */}
                    <div className="img-service right">
                        <span className="rotated-letter" data-parallax="-0.08">W</span>
                        <img src="assets/portfolio/ariela_old/portada.png" alt="branding" className="parallaxAll" data-parallax="0.06" />
                    </div>
               {/*  </Parallax> */}
            </div>

            <div className="servicios-item-wrapper flex-reverse">
                <div className="text-service-parallax text-service">
                    <div className="servicios-separador parallaxAll" data-parallax="0.01">
                        <h5 className="font3">E-commerce</h5>
                        <span className="dash"></span>
                    </div>
                    <p className="servicios-descripcion parallaxAll" data-parallax="0.03">Diseño y desarrollo de e-commerces con las siguientes tecnologías:</p>
                    <ul className="servicios-items">
                        <li>Vtex IO</li>
                        <li>Magento</li>
                    </ul>
                </div>
                <div className="img-service left">
                    <span className="rotated-letter" data-parallax="0.14">E</span>
                    <img src="assets/portfolio/plantit/portada.jpg" alt="branding" className="parallaxAll" data-parallax="0.06" />
                </div>

            </div>
        </section>
    )
}

export default ServiceWhatWeDo;