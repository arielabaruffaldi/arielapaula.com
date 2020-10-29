import React from 'react';
import { NavLink } from "react-router-dom";
import styles from "./Button.module.scss"
import PropTypes from "prop-types";

const Button = ({ href, text, color, children, classes }) => {
    return (
        <div className={`${styles.ButtonContainer} ${styles[color]}`}>
            <NavLink
                to={`${href}`}
                className={
                    `${styles.Button} ${classes ? classes : ""}`
                }
            >
                {text && text}
                {children}
            </NavLink>
            <div className={styles.circle}></div>
        </div>
    )
}

Button.propTypes = {
    href: PropTypes.string,
    text: PropTypes.string,
    color: PropTypes.oneOf(["white", "gray", "black"]),
    classes: PropTypes.string
}
export default Button;