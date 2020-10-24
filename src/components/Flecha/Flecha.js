import React from "react";
import { MdKeyboardArrowUp } from 'react-icons/md';
import styles from "./Flecha.module.scss";

const Flecha = ({ text, hasHover }) => {
    return (
        <div className={styles.FlechaContainer}>
            <div className={`${styles.Flecha} ${hasHover && styles.hasHover}`}>
                <MdKeyboardArrowUp size={"1em"} />
            </div>
            <p>{text}</p>
        </div>
    )
}

export default Flecha;