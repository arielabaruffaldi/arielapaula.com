import React from 'react';
import styles from './ParagraphSection.module.scss'

const ParagraphSection = ({
    color = "white",
    hasPadding,
    classes,
    children,
    size,
    align = "left",
    width = "100%",
    customClass
}) => {
    return (
        <p className={
            `${styles.ParagraphSection} ${hasPadding ? styles.hasPadding : ""} ${classes ? classes : ""} ${styles[color]} ${customClass ? customClass : ""}`
        }
            style={{ fontSize: `${size}rem`, textAlign: align, width: width }}>
            {children}
        </p>
    )
}

export default ParagraphSection;