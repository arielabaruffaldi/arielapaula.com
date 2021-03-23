import React, { useRef, useEffect } from "react";
import Subtitle from "./../../components/Subtitle/Subtitle";
import styles from "./Portfolio.module.scss";
import "swiper/swiper.scss";
import PortfolioGaleria from "../../components/PortfolioGaleria/PortfolioGaleria";
import ParagraphSection from "./../../components/ParagraphSection/ParagraphSection";
import { trabajos } from "./../../utils/trabajos";
import Bubble from "../../components/Bubble/Bubble";
import { TimelineLite, TweenMax, Power3, Sine } from "gsap";
import { useMediaQuery } from "react-responsive";
import IsLoadingHOC from "./../../utils/IsLoadingHOC";

function tweenItem(array) {
  TweenMax.to(array, 2, {
    y: "-=20px",
    yoyo: true,
    repeat: -1,
    ease: Sine.easeInOut,
  });
}

const Portfolio = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 660px)",
  });
  let bubles = useRef(null);
  let tl = new TimelineLite({ delay: 0.3 });
  let content = useRef(null);

  useEffect(() => {
    const headlineFirst = content.children;
    const buble1 = bubles.children[0];
    const buble2 = bubles.children[1];
    const buble3 = bubles.children[2];
    const buble4 = bubles.children[3];

    const bublesArray = [buble1, buble2, buble3, buble4];

    tl.from(
      headlineFirst[0].children,
      1,
      {
        y: 40,
        ease: Power3.easeOut,
        delay: 0.2,
      },
      0.15,
      "Start"
    ).from(
      headlineFirst[1].children,
      0.75,
      {
        y: 30,
        opacity: 0,
      },
      1.25
    );

    tl.staggerFrom(
      bublesArray,
      1,
      {
        scale: 1.2,
        opacity: 0,
        ease: Power3.easeOut,
      },
      0.2
    );
    tweenItem(bublesArray);
  }, [tl]);
  return (
    <>
      {!isMobile ? (
        <div ref={(el) => (bubles = el)}>
          <Bubble width={100} x={800} y={250} opacity={0.2}></Bubble>
          <Bubble width={50} x={900} y={150} opacity={0.2}></Bubble>
          <Bubble width={30} x={900} y={350} opacity={0.2}></Bubble>
          <Bubble
            width={500}
            x={1000}
            y={250}
            opacity={0.2}
            color={"#FFC926"}
          ></Bubble>
        </div>
      ) : (
        <div ref={(el) => (bubles = el)}>
          <Bubble width={80} x={300} y={100} opacity={0.2}></Bubble>
          <Bubble
            width={40}
            x={330}
            y={150}
            opacity={0.5}
            color={"#FFC926"}
          ></Bubble>
          <Bubble
            width={80}
            x={-10}
            y={650}
            opacity={0.2}
            color={"#FFC926"}
          ></Bubble>
        </div>
      )}
      <section className={styles.Portfolio}>
        <div ref={(el) => (content = el)}>
          <div className={styles.contentContainer}>
            <Subtitle
              separator
              text="Proyectos"
              secondaryText="Ariela Baruffaldi"
              priority={1}
            ></Subtitle>
          </div>
          <div className={"content-container"}>
            <ParagraphSection hasPadding customClass={styles.Paragraph}>
              Algunos de los últimos proyectos. Abarcando en la gran mayoría
              tanto el desarrollo como el diseño de la interfaz.
            </ParagraphSection>
          </div>
        </div>
      </section>

      <PortfolioGaleria trabajos={trabajos}></PortfolioGaleria>
    </>
  );
};

export default IsLoadingHOC(Portfolio);
