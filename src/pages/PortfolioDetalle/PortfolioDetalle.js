import React from 'react';
import { useParams } from "react-router-dom";
import { trabajos } from "./../../utils/trabajos";
import styles from "./PortfolioDetalle.module.scss";
import Text from "./../../components/Text/Text"

const PortfolioDetalle = () => {
    const idToShow = useParams().id;
    const trabajo = trabajos.filter(item => item.id == idToShow);
    console.log(trabajo)
    return (
        <section className={styles.PortfolioDetalle}>
            <div className={styles.PortfolioHeader}>
                <div className={styles.fotoPortada} style={{ backgroundImage: `url(${trabajo[0].fotos[0]})` }}></div>
                <aside>
                    <Text color="gray" priority={2} weight="light" size={1}>{trabajo[0].type}</Text>
                    <Text color="gray" priority={1} weight="light" size={6}>{trabajo[0].title}</Text>
                    {trabajo[0].url && <a href={trabajo[0].url}>{trabajo[0].url}</a>}
                </aside>
            </div>
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