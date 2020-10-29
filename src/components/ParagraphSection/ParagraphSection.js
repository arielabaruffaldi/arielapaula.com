import React from 'react';
import styles from './ParagraphSection.module.scss'

const ParagraphSection = ({
    color = "white",
    hasPadding,
    classes,
    children,
    size,
    align = "left",
    width = "100%"
}) => {
    return (
        <p className={
            `${styles.ParagraphSection} ${hasPadding ? styles.hasPadding : ""} ${classes ? classes : ""} ${styles[color]}`
        }
            style={{ fontSize: `${size}em`, textAlign: align, width: width }}>
            {children}
        </p>
    )
}

export default ParagraphSection;