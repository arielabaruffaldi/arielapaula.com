import React, { useRef, useEffect } from "react";
import Typed from "react-typed";
import style from "./Home.module.scss";
import Subtitle from "./../../components/Subtitle/Subtitle";
import PortfolioCarrousel from "./../../components/PortfolioCarrousel/PortfolioCarrousel";
import { ultimosTrabajos } from "./../../utils/trabajos";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import Button from "../../components/Button/Button";
import { Parallax } from "react-scroll-parallax";
import Link from "../../components/Link/Link";
import { useMediaQuery } from "react-responsive";
import Bubble from "../../components/Bubble/Bubble";
import { TimelineLite, TweenMax, Power3, Sine } from "gsap";

function tweenItem(array) {
  TweenMax.to(array, 2, {
    y: "-=20px",
    yoyo: true,
    repeat: -1,
    ease: Sine.easeInOut,
  });
}

const Home = () => {
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
    const bublesArray = [buble1, buble2, buble3];
    console.log(headlineFirst[0].children[0].children)
    tl.from(
      headlineFirst[0].children[0].children,
      1,
      {
        y: 120,
        ease: Power3.easeOut,
        delay: 0.2,
      },
      0.15,
      "Start"
    )
      .from(
        headlineFirst[0].children[1].children,
        1,
        {
          y: 120,
          ease: Power3.easeOut,
          delay: 0.5,
        },
        0.15,
        "Start"
      )
      .from(
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
      0.4
    );
    tweenItem(bublesArray);
  }, [tl]);

  return (
    <>
      {!isMobile ? (
        <div ref={(el) => (bubles = el)}>
          <Bubble
            width={300}
            x={700}
            y={250}
            opacity={0.2}
            color={"#FFC926"}
          ></Bubble>
          <Bubble width={200} x={500} y={450} opacity={0.2}></Bubble>
        </div>
      ) : (
        <div ref={(el) => (bubles = el)}>
          <Bubble
            width={100}
            x={200}
            y={100}
            opacity={0.2}
            color={"#FFC926"}
          ></Bubble>
          <Bubble width={50} x={280} y={180} opacity={0.2}></Bubble>
          <Bubble width={150} x={-80} y={480} opacity={0.2}></Bubble>
        </div>
      )}
      <SectionWrapper hasPadding className={style.Home}>
        <div ref={(el) => (content = el)}>
     
              <h1>
                <div>
                  <span>{`desarrollo de `}</span>
                </div>
                <Typed
                  strings={["aplicaciones", "páginas web", "e-commerce"]}
                  typeSpeed={110}
                  backSpeed={60}
                  backDelay={800}
                  showCursor={false}
                  tagInner="div"
                  loop
                ></Typed>
              </h1>
           
              <Link href="/proyectos" classes={style.verMas}>
                <Button>ver mas trabajos</Button>
              </Link>
            
        </div>
      </SectionWrapper>

      <SectionWrapper color="dark" className={style.SectionWrapperCarrousel}>
      
          <>
         
              <Subtitle
                hasPadding
                separator
                text="ultimos proyectos"
                secondaryText="Desarrollo web"
                priority={2}
              ></Subtitle>
           
              <PortfolioCarrousel trabajos={ultimosTrabajos} color="dark" />
          
          </>
        
      </SectionWrapper>
    </>
  );
};

export default Home;
