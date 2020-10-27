import React from "react";
import styles from "./Subtitle.module.scss"

const Subtitle = ({ text, secondaryText, etiqueta, hasPadding }) => {
    const classes = `${styles.Subtitle} ${hasPadding ? styles.hasPadding : ""}`
    return (
        etiqueta === "h1" ?
            <h1 className={classes}>{text}{secondaryText && <div className={styles.separator}></div>}<span>{secondaryText && secondaryText}</span></h1> :
            <h2 className={classes}>{text}{secondaryText && <div className={styles.separator}></div>}<span>{secondaryText && secondaryText}</span></h2>
    )
}

export default Subtitle;