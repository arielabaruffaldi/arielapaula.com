import React from "react";
import styles from "./Subtitle.module.scss"

const Subtitle = ({ text, secondaryText, etiqueta, separator, hasPadding}) => {
    const classes = `${styles.Subtitle} ${hasPadding ? styles.hasPadding : ""}`
    return (
        etiqueta === "h1" ? <h1 className={classes}>{text}<div className={styles.separator}></div>{secondaryText && <span>{secondaryText}</span>}</h1> :
            <h2 className={classes}>{text}{separator && <div className={styles.separator}></div>}<span>{secondaryText}</span></h2>
    )
}

export default Subtitle;