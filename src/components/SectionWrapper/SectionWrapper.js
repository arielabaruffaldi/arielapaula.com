import React from 'react';
import styles from "./SectionWrapper.module.scss"
const SectionWrapper = ({color, hasPadding, className, children}) => {
    return(
        <section className={`${styles.SectionWrapper} ${hasPadding ? styles.hasPadding : ""} ${className ? className : ""} ${color ? styles[color] : ""}`}>
            {children}
        </section>
    )
}

export default SectionWrapper;