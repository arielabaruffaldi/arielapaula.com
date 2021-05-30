import React, { useState } from "react";
import Subtitle from "../../Subtitle/Subtitle";
import Link from "./../../Link/Link";
import styles from "./PortfolioCard.module.scss";

const PortfolioCard = ({ id,
  href,
  type,
  title,
  handleHover,
  isActive,
  customClass
}) => {
  return (
    <li
      /*  onMouseEnter={() => handleHover(id)} */
      className={`${styles.PortfolioCard} ${isActive && styles.isActive} ${customClass || ""}`}
    >
      <Link href={href} classes={styles.PortfolioCardInfo}>
        <Subtitle
          separator
          text={type}
          priority={3}
        ></Subtitle>
        <h2>{title}</h2>
      </Link>
    </li>
  );
};

export default PortfolioCard;
