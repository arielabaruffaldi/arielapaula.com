import React from "react";
import Link from "./../../Link/Link"
import styles from "./PortfolioCard.module.scss";

const PortfolioCard = ({ title, type, foto, href }) => {
    return (
        <article className={styles.PortfolioCard}>
            <Link>
                <div className={styles.PortfolioCardInfo}>
                    <h3>{type}</h3>
                    <h2>{title}</h2>
                </div>
                <img src={`${foto}`} alt={`${title}`} />
            </Link>
        </article>
    )
}

export default PortfolioCard;