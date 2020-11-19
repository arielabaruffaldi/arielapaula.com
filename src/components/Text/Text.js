import React from "react";
import styles from "./Text.module.scss";
import PropTypes from "prop-types";

const TextPrimary = ({
  priority,
  tag,
  children,
  customStyle,
  size,
  weight = "",
  color = "white",
  opacity = 1,
  align = "left",
  hasPadding,
  classes,
  ...props
}) => {
  let CustomTag = priority ? `h${priority}` : tag;
  return (
    <CustomTag
      className={`${styles.TextPrimary} ${styles[color]} ${styles[weight]} ${customStyle || ""} ${hasPadding ? styles.hasPadding : ""} ${classes && classes}`}
      style={{ fontSize: `${size}em`, opacity: opacity || 1, textAlign: align }} 
      {...props}
    >
      {children}
    </CustomTag>
  );
};

TextPrimary.propTypes = {
  priority: PropTypes.number,
  tag: PropTypes.string,
  align: PropTypes.oneOf(["left", "center", "right"]),
  opacity: PropTypes.number,
  weight: PropTypes.oneOf(["bold", "semibold", "medium", "regular", "light"]),
  color: PropTypes.oneOf(["black", "white", "gray", "slide", "error", "description", ""]),
  size: PropTypes.number,
  customStyle: PropTypes.object,
  children: PropTypes.element,
};

export default TextPrimary;
