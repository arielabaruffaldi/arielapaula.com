import React from 'react';
import styles from './ParagraphSection.module.scss'

const ParagraphSection = ({ color, hasPadding, classes, children }) => {
    return (
        <p className={
            `${styles.ParagraphSection} ${hasPadding ? styles.hasPadding : ""} ${classes ? classes : ""} ${color ? styles[color] : ""}` 
        }>{children}</p>
    )
}

export default ParagraphSection;