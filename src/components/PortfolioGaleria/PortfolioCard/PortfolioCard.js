import React from "react";
import Link from "./../../Link/Link"
import styles from "./PortfolioCard.module.scss";
import { Parallax } from 'react-scroll-parallax';

const PortfolioCard = ({ title, type, foto, href, index, justImage }) => {
    let parallaxAxis = index % 2 === 0 ? ["-20px", "50px"] : ["20px", "-50px"];
    return (
        !justImage ?
            <article className={`${styles.PortfolioCard} ${title}`}>
                <Link href={href}>
                    <div className={styles.PortfolioCardInfo}>
                        <h3>{type}</h3>
                        <h2>{title}</h2>
                    </div>
                    <Parallax y={parallaxAxis} className={styles.Container}>
                        <img src={`${foto}`} alt={`${title}`} />
                    </Parallax>
                </Link>
            </article> :
            <Parallax y={parallaxAxis} className={styles.Container}>
                <img src={`${foto}`} alt={`${title}`} />
            </Parallax>
    )
}

export default PortfolioCard;