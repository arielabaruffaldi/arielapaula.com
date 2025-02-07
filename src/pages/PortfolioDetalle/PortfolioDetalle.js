import React from "react";
import { useParams } from "react-router-dom";
import { trabajos } from "./../../utils/trabajos";
import styles from "./PortfolioDetalle.module.scss";
import Text from "./../../components/Text/Text";
import Subtitle from "./../../components/Subtitle/Subtitle";
import ParagraphSection from "../../components/ParagraphSection/ParagraphSection";
import { Parallax, ParallaxBanner } from "react-scroll-parallax";
import { useMediaQuery } from "react-responsive";
import IsLoadingHOC from "./../../utils/IsLoadingHOC";

const PortfolioDetalle = () => {
  const idToShow = useParams().id;
  const trabajo = trabajos.filter((item) => item.pathUrl === idToShow);
  const isMobile = useMediaQuery({
    query: "(max-width: 660px)",
  });
  return (
    <section className={styles.PortfolioDetalle}>
      <div className={styles.PortfolioHeader}>
        <div
          className={styles.fotoPortada}
          style={{
            backgroundImage: `url(../${trabajo[0].path}/${trabajo[0].portada})`,
          }}
        ></div>
        <aside>
          <Text color="gray" priority={2} weight="regular" size={1}>
            {trabajo[0].type}
          </Text>
          <Text
            color="gray"
            priority={1}
            weight="light"
            customClass={styles.PortfolioTitle}
          >
            {trabajo[0].title}
          </Text>
        </aside>
      </div>

      {!isMobile ? (
        <>
          <Parallax y={["-50px", "50px"]} className={styles.Container}>
            <Subtitle
              separator
              hasPadding
              text={trabajo[0].title}
              secondaryText={trabajo[0].type}
              priority={1}
            ></Subtitle>
          </Parallax>

          <Parallax y={["-50px", "70px"]} className={styles.Container}>
            <ParagraphSection
              width={"60%"}
              size={1.5}
              hasPadding
              className={styles.Paragraph}
              color={"gray"}
            >
              {trabajo[0].paragraph}
            </ParagraphSection>
          </Parallax>
        </>
      ) : (
        <>
          <Subtitle
            separator
            hasPadding
            text={trabajo[0].title}
            secondaryText={trabajo[0].type}
            priority={1}
          ></Subtitle>
          <ParagraphSection
            width={"60%"}
            size={1}
            hasPadding
            className={styles.Paragraph}
            color={"gray"}
          >
            {trabajo[0].paragraph}
          </ParagraphSection>
        </>
      )}

      {trabajo[0].url && (
        <Parallax y={["-50px", "20px"]} className={styles.Container}>
          <Text color="white" tag="p" weight="regular" size={0.9} hasPadding>
            <a href={`${trabajo[0].url}`}>{`${trabajo[0].url}`}</a>
          </Text>
        </Parallax>
      )}
      <section className={styles.PortfolioDetalleGaleria}>
        {trabajo[0].fotos.map((foto, index) => {
          let parallaxAxis =
            index % 2 === 0 ? ["-80px", "30px"] : ["80px", "-80px"];
          return (
            <>
              {!foto.isFullScreen ? (
                <>
                  {!isMobile ? (
                    <Parallax
                      y={parallaxAxis}
                      className={`${styles.Container}`}
                      key={index}
                    >
                      <img
                        alt={"fotos portfolio"}
                        src={`../${trabajo[0].path}/${foto.src}`}
                      />
                    </Parallax>
                  ) : (
                    <img
                      key={index}
                      alt={"fotos portfolio"}
                      src={`../${trabajo[0].path}/${foto.src}`}
                      className={styles.imgPortfolio}
                    />
                  )}
                </>
              ) : !foto.noParallax ? (
                <>
                  {!isMobile ? (
                    <ParallaxBanner
                      className={styles.ContainerFullScreen}
                      layers={[
                        {
                          image: `../${trabajo[0].path}/${foto.src}`,
                          amount: 0.2,
                        },
                      ]}
                      style={{
                        height: "100vh",
                      }}
                      key={index}
                    ></ParallaxBanner>
                  ) : (
                    <div
                      className={styles.ContainerFullScreenMobile}
                      key={index}

                      style={{
                        backgroundImage: `url(../${trabajo[0].path}/${foto.src})`,
                      }}
                    ></div>
                  )}
                </>
              ) : (
                <div
                  className={`${styles.noParallax} ${
                    foto.noPadding && styles.noPadding
                  }`}
                >
                  <img
                    key={index}
                    alt={"fotos portfolio"}
                    src={`../${trabajo[0].path}/${foto.src}`}
                  />
                </div>
              )}
            </>
          );
        })}
      </section>
    </section>
  );
};
export default IsLoadingHOC(PortfolioDetalle);
