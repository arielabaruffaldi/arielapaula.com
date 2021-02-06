import React, { useRef, useEffect } from "react";
import ServiceWhatWeDo from "../../components/ServiceWhatWeDo/ServiceWhatWeDo";
import styles from "./Servicios.module.scss";
import { Parallax } from "react-scroll-parallax";
import Subtitle from "./../../components/Subtitle/Subtitle";
import ParagraphSection from "./../../components/ParagraphSection/ParagraphSection";
import Bubble from "../../components/Bubble/Bubble";
import { TimelineLite, TweenMax, Power3, Sine } from "gsap";
import { useMediaQuery } from "react-responsive";

function tweenItem(array) {
  TweenMax.to(array, 2, {
    y: "-=20px",
    yoyo: true,
    repeat: -1,
    ease: Sine.easeInOut,
  });
}

const Servicios = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 660px)",
  });

  let bubles = useRef(null);
  let tl = new TimelineLite({ delay: 0.1 });
  let content = useRef(null);

  useEffect(() => {
    const headlineFirst = content.children;
    const buble1 = bubles.children[0];
    const buble2 = bubles.children[1];
    const buble3 = bubles.children[2];
    const buble4 = bubles.children[3];
    const buble5 = bubles.children[4];
    const buble6 = bubles.children[5];
    const buble7 = bubles.children[6];

    const bublesArray = [
      buble1,
      buble2,
      buble3,
      buble4,
      buble5,
      buble6,
      buble7,
    ];

    tl.from(
      headlineFirst[0].children[0].children,
      1,
      {
        y: 70,
        ease: Power3.easeOut,
        delay: 0.2,
      },
      0.15,
      "Start"
    ).from(
      headlineFirst[0].children[1],
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
          <Bubble
            width={100}
            x={800}
            y={250}
            opacity={0.4}
            color={"#cacaca"}
          ></Bubble>
          <Bubble
            width={50}
            x={900}
            y={150}
            opacity={0.6}
            color={"#FFC926"}
          ></Bubble>
          <Bubble
            width={30}
            x={900}
            y={350}
            opacity={0.6}
            color={"#FFC926"}
          ></Bubble>
          <Bubble
            width={500}
            x={1000}
            y={250}
            opacity={0.4}
            color={"#cacaca"}
          ></Bubble>
          <Bubble
            width={300}
            x={-100}
            y={1000}
            opacity={0.2}
            color={"#cacaca"}
          ></Bubble>
          <Bubble
            width={150}
            x={980}
            y={1500}
            opacity={0.2}
            color={"#cacaca"}
          ></Bubble>
          <Bubble
            width={80}
            x={1100}
            y={1500}
            opacity={0.6}
            color={"#FFC926"}
          ></Bubble>
        </div>
      ) : (
        <div ref={(el) => (bubles = el)}>
          <Bubble
            width={100}
            x={300}
            y={580}
            opacity={0.4}
            color={"#cacaca"}
          ></Bubble>
          <Bubble
            width={60}
            x={300}
            y={700}
            opacity={0.4}
            color={"#FFC926"}
          ></Bubble>
          <Bubble
            width={30}
            x={-30}
            y={900}
            opacity={0.4}
            color={"#FFC926"}
          ></Bubble>
          <Bubble
            width={120}
            x={300}
            y={1200}
            opacity={0.4}
            color={"#cacaca"}
          ></Bubble>
          <Bubble
            width={50}
            x={-20}
            y={1700}
            opacity={0.4}
            color={"#FFC926"}
          ></Bubble>
        </div>
      )}
      <section className={styles.Servicios} ref={(el) => (content = el)}>
        <div ref={(el) => (content = el)}>
          <div className={styles.contentContainer}>
            <Subtitle
              customClass={styles.ServiciosSubtitle}
              separator
              text="Servicios"
              secondaryText="Ariela Baruffaldi"
              priority={1}
            ></Subtitle>
          </div>
          <div className={"content-container"}>
            <ParagraphSection
              color="black"
              hasPadding
              customClass={styles.ServiciosParagraph}
            >
              Diseño y desarrollo de sitios web desde cero enfocados en una
              interfaz cómoda de navegar e intuitiva.{" "}
            </ParagraphSection>
          </div>
        </div>
      </section>
      <ServiceWhatWeDo></ServiceWhatWeDo>
    </>
  );
};

export default Servicios;
