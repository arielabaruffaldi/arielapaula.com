import React from 'react';
import styles from "./Button.module.scss"
import PropTypes from "prop-types";

const Button = ({ href, text, color = "white", children, classes, onClick, size = 1, weight = 300, tag = "button", ...props }) => {
    let CustomTag = tag;
    return (
        <CustomTag
            to={`${href}`}
            className={
                `${styles.Button} ${classes ? classes : ""} ${styles[color]}`
            }
            style={{ fontSize: `${size}em`, fontWeight: weight }}
            onClick={onClick}
            {...props}
        >
            {text && text}
            {children}
            <div className={styles.circle}></div>

        </CustomTag>
    )
}

Button.propTypes = {
    href: PropTypes.string,
    text: PropTypes.string,
    color: PropTypes.oneOf(["white", "gray", "black"]),
    classes: PropTypes.string
}
export default Button;