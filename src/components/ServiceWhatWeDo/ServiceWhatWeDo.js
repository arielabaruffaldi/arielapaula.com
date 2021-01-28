import React from 'react';
import ServiceCard from './../ServiceCard/ServiceCard';
import "./ServiceWhatWeDo.scss";
import { Parallax, ParallaxBanner } from 'react-scroll-parallax';
import { useMediaQuery } from 'react-responsive'

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
    const isMobile = useMediaQuery({
        query: '(max-width: 660px)'
    })
    return (
        <section className="servicios">
            {/* <ServiceCard items={servicios}></ServiceCard> */}
            <div className="servicios-item-wrapper">
                {!isMobile ?
                    <>
                        <Parallax y={["-50px", "20px"]} >
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
                        </Parallax>

                        <Parallax y={["50px", "-40px"]} className="serviceWrapper">
                            <div className="img-service right">
                                <Parallax y={["-50px", "100px"]}>
                                    <span className="rotated-letter" >W</span>
                                </Parallax>
                                <img src="assets/portfolio/carruselHome/xborderpack.png" alt="branding" className="parallaxAll" data-parallax="0.06" />
                            </div>
                        </Parallax> </> :
                    <>
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
                        <div className="img-service right">
                            <span className="rotated-letter" data-parallax="-0.08">W</span>
                            <img src="assets/portfolio/carruselHome/xborderpack.png" alt="branding" className="parallaxAll" data-parallax="0.06" />
                        </div>
                    </>
                }
            </div>


            <div className="servicios-item-wrapper flex-reverse">
                {!isMobile ?
                    <>
                        <Parallax y={["-20px", "20px"]}>
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
                        </Parallax>
                        <Parallax y={["10px", "-10px"]} className="serviceWrapper">
                            <div className="img-service left">
                                <Parallax y={["-50px", "100px"]}>
                                    <span className="rotated-letter" >E</span>
                                </Parallax>
                                <img src="assets/portfolio/carruselHome/ariela.png" alt="branding" className="parallaxAll" data-parallax="0.06" />
                            </div>
                        </Parallax>
                    </> :
                    <>
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
                    </>
                }
            </div>
        </section>
    )
}

export default ServiceWhatWeDo;