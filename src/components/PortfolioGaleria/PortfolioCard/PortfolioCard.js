import React from "react";
import Link from "./../../Link/Link";
import styles from "./PortfolioCard.module.scss";
const PortfolioCard = ({ title, type, foto, href, index }) => {

  return (
    <article className={`${styles.PortfolioCard} portfolio-card`}>
      <Link href={href}>
        <div className={styles.PortfolioCardInfo}>
          <h3>{type}</h3>
          <h2>{title}</h2>
        </div>
        <img src={`${foto}`} alt={`${title}`} />
      </Link>
    </article>
  );
};

export default PortfolioCard;
