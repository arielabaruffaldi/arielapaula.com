import React from 'react';
import { useParams } from "react-router-dom";
import { trabajos } from "./../../utils/trabajos";
import styles from "./PortfolioDetalle.module.scss";
import Text from "./../../components/Text/Text";
import Subtitle from "./../../components/Subtitle/Subtitle"
import ParagraphSection from '../../components/ParagraphSection/ParagraphSection';

const PortfolioDetalle = () => {
    const idToShow = useParams().id;
    const trabajo = trabajos.filter(item => item.id == idToShow);
    console.log(trabajo)
    return (
        <section className={styles.PortfolioDetalle}>
            <div className={styles.PortfolioHeader}>
                <div className={styles.fotoPortada} style={{ backgroundImage: `url(${trabajo[0].fotos[0]})` }}></div>
                <aside>
                    <Text color="gray" priority={2} weight="regular" size={1}>{trabajo[0].type}</Text>
                    <Text color="gray" priority={1} weight="light" size={6}>{trabajo[0].title}</Text>
                </aside>
            </div>
            <Subtitle hasPadding text={trabajo[0].title} secondaryText={trabajo[0].type} priority={1}></Subtitle>

            <ParagraphSection width={"60%"} size={1} hasPadding className={styles.Paragraph} color={"gray"}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</ParagraphSection>
            {trabajo[0].url && <Text color="white" tag="p" weight="regular" size={.9} hasPadding>Url: <a href={`${trabajo[0].url}`}>{`${trabajo[0].url}`}</a></Text>}

            {trabajo[0].fotos.map((src, index) => {
                console.log(src)
                return (
                    <img key={index} alt={"fotos portfolio"} src={src} />
                )
            })}
        </section>
    )
}
export default PortfolioDetalle