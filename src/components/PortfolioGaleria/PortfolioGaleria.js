import React from 'react';
import { trabajos } from "./../../utils/trabajos";
import PortfolioCard from './PortfolioCard/PortfolioCard';
import styles from "./PortfolioGaleria.module.scss"
const PortfolioGaleria = () => {
    return (
        <section className={styles.PortfolioGaleria}>
            {
                trabajos.map((trabajo, index) =>
                    <PortfolioCard
                        title={trabajo.title}
                        key={index}
                        type={trabajo.type}
                        foto={trabajo.foto}
                    />
                )
            }
        </section>
    )
}

export default PortfolioGaleria;