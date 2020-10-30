import React from "react";
import Link from "./../../Link/Link"
import styles from "./PortfolioCard.module.scss";
import { Parallax } from 'react-scroll-parallax';

const PortfolioCard = ({ title, type, foto, href, index }) => {
    let parallaxAxis = index % 2 === 0 ? ["-100px", "100px"] : ["100px", "-100px"]
    return (
        <article className={`${styles.PortfolioCard} ${title}`}>
            <Link href={href}>
                <div className={styles.PortfolioCardInfo}>
                    <h3>{type}</h3>
                    <h2>{title}</h2>
                </div>
                <Parallax y={parallaxAxis} className={styles.Container} speed={"slower"}>
                    <img src={`${foto}`} alt={`${title}`} />
                </Parallax>

            </Link>
        </article>

    )
}

export default PortfolioCard;