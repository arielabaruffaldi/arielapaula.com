import React from 'react';
import PortfolioCard from './PortfolioCard/PortfolioCard';
import styles from "./PortfolioGaleria.module.scss"
const PortfolioGaleria = ({ trabajos }) => {
    return (
        <section className={styles.PortfolioGaleria}>
            {
                trabajos.map((trabajo, index) => {
                        return (<PortfolioCard
                            title={trabajo.title}
                            key={index}
                            type={trabajo.type}
                            foto={trabajo.thumb}
                         href={`portfolio/${trabajo.id}`}
                        />)
                })
            }
        </section>
    )
}

export default PortfolioGaleria;