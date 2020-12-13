import React from 'react';
import { useParams } from "react-router-dom";
import { trabajos } from "./../../utils/trabajos";
import styles from "./PortfolioDetalle.module.scss";
import Text from "./../../components/Text/Text";
import Subtitle from "./../../components/Subtitle/Subtitle"
import ParagraphSection from '../../components/ParagraphSection/ParagraphSection';
import OnVisible from "react-on-visible";
import { Parallax, ParallaxBanner } from 'react-scroll-parallax';

const PortfolioDetalle = () => {
    const idToShow = useParams().id;
    const trabajo = trabajos.filter(item => item.id == idToShow);

    return (
        <section className={styles.PortfolioDetalle}>
            <div className={styles.PortfolioHeader}>
                <div className={styles.fotoPortada} style={{ backgroundImage: `url(${trabajo[0].portada})` }}></div>
                <aside>
                    <Text color="gray" priority={2} weight="regular" size={1}>{trabajo[0].type}</Text>
                    <Text color="gray" priority={1} weight="light" size={6}>{trabajo[0].title}</Text>
                </aside>
            </div>

            <Parallax y={["-50px", "50px"]} className={styles.Container}>
                <Subtitle hasPadding text={trabajo[0].title} secondaryText={trabajo[0].type} priority={1}></Subtitle>
            </Parallax>

            <Parallax y={["-50px", "70px"]} className={styles.Container}>
                <ParagraphSection width={"60%"} size={1} hasPadding className={styles.Paragraph} color={"gray"}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</ParagraphSection>
            </Parallax>

            {trabajo[0].url &&
                <Parallax y={["-50px", "20px"]} className={styles.Container}>
                    <Text color="white" tag="p" weight="regular" size={.9} hasPadding>Url:
                    <a href={`${trabajo[0].url}`}>{`${trabajo[0].url}`}</a>
                    </Text>
                </Parallax>

            }
            <section className={styles.PortfolioDetalleGaleria}>
                {trabajo[0].fotos.map((foto, index) => {
                    let parallaxAxis = index % 2 === 0 ? ["-80px", "80px"] : ["80px", "-80px"];
                    let noParallaxClass = foto.noParallax ? styles.noParallax : ''
                    return (
                        <>
                            {!foto.isFullScreen && !foto.isFullScreen ?
                                <Parallax y={parallaxAxis} className={`${styles.Container} ${noParallaxClass}`}>
                                    <img key={index} alt={"fotos portfolio"} src={foto.src} />
                                </Parallax>
                                :
                                <ParallaxBanner
                                    className={styles.ContainerFullScreen}
                                    layers={[
                                        {
                                            image: foto.src,
                                            amount: 0.2,
                                        }
                                    ]}
                                    style={{
                                        height: '100vh',
                                    }}
                                >
                                    <h1>Banner Children</h1>
                                </ParallaxBanner>
                            }
                        </>
                    )
                })}
            </section>
        </section>
    )
}
export default PortfolioDetalle