import React from "react";
import styles from "./Subtitle.module.scss"

const Subtitle = ({ text, secondaryText, priority, hasPadding, separator }) => {
    const classes = `${styles.Subtitle} ${hasPadding ? styles.hasPadding : ""}`;
    const CustomTag = `h${priority}`
    return (
        
            <CustomTag className={classes}>{text}{secondaryText && separator && <div className={styles.separator}></div>}<span>{secondaryText && secondaryText}</span></CustomTag>
         
    )
}

export default Subtitle;