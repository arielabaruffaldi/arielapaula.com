import React from "react";
import styles from "./Subtitle.module.scss"

const Subtitle = ({ text, secondaryText, etiqueta, separator }) => {
    return (
        etiqueta === "h1" ? <h1 className={styles.Subtitle}>{text}<div className={styles.separator}></div>{secondaryText && <span>{secondaryText}</span>}</h1> :
            <h2 className={styles.Subtitle}>{text}{separator && <div className={styles.separator}></div>}<span>{secondaryText}</span></h2>
    )
}

export default Subtitle;