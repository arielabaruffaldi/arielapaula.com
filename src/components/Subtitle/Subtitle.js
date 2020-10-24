import React from "react";
import styles from "./Subtitle.module.scss"

const Subtitle = () => {
    return( 
        <h4 className={styles.Subtitle}>sobre nosotros<div className={styles.separator}></div><span>somos un estudio blabla</span></h4>
    )
}

export default Subtitle;