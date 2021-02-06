import React from "react";
import Link from "./../../Link/Link";
import styles from "./PortfolioCard.module.scss";
import { Parallax } from "react-scroll-parallax";
import { useMediaQuery } from "react-responsive";

const PortfolioCard = ({ title, type, foto, href, index }) => {
  const isMobile = useMediaQuery({
    query: "(max-width: 660px)",
  });
  let parallaxAxis = index % 2 === 0 ? ["-80px", "50px"] : ["60px", "-30px"];
  return (
    <article className={`${styles.PortfolioCard} ${title}`}>
      <Link href={href}>
        <div className={styles.PortfolioCardInfo}>
          <h3>{type}</h3>
          <h2>{title}</h2>
        </div>
        {!isMobile ? (
          <Parallax y={parallaxAxis} className={styles.Container}>
            <img src={`${foto}`} alt={`${title}`} />
          </Parallax>
        ) : (
          <img src={`${foto}`} alt={`${title}`} />
        )}
      </Link>
    </article>
  );
};

export default PortfolioCard;
