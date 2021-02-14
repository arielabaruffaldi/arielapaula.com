import React from 'react';
import PortfolioCard from './PortfolioCard/PortfolioCard';
import styles from "./PortfolioGaleria.module.scss";

const PortfolioGaleria = ({ trabajos }) => {
   
    return (
        <>
            <section className={styles.PortfolioGaleria}>
                {
                    trabajos.map((trabajo, index) => {
                        return (
                            <PortfolioCard
                                title={trabajo.title}
                                key={index}
                                type={trabajo.type}
                                foto={`${trabajo.path}/${trabajo.thumb}`}
                                href={`proyectos/${trabajo.pathUrl}`}
                                index={index}
                                trabajo={trabajo}
                            />)
                    })
                }
            </section>
        </>
    )
}

export default PortfolioGaleria;