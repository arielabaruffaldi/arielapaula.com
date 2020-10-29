import React from "react";
import styles from "./Subtitle.module.scss"

const Subtitle = ({ text, secondaryText, priority, hasPadding }) => {
    const classes = `${styles.Subtitle} ${hasPadding ? styles.hasPadding : ""}`;
    const CustomTag = `h${priority}`
    return (
        
            <CustomTag className={classes}>{text}{secondaryText && <div className={styles.separator}></div>}<span>{secondaryText && secondaryText}</span></CustomTag>
           /*  <h2 className={classes}>{text}{secondaryText && <div className={styles.separator}></div>}<span>{secondaryText && secondaryText}</span></h2> */
    )
}

export default Subtitle;