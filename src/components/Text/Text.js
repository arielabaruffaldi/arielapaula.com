import React from "react";
import styles from "./Text.module.scss";
import PropTypes from "prop-types";

const Text = ({
  priority,
  tag,
  children,
  customClass,
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
      className={`${styles.TextPrimary} ${styles[color]} ${styles[weight]} ${customClass || ""} ${hasPadding ? styles.hasPadding : ""} ${classes && classes}`}
      style={{ fontSize: `${size}rem`, opacity: opacity || 1, textAlign: align }} 
      {...props}
    >
      {children}
    </CustomTag>
  );
};

Text.propTypes = {
  priority: PropTypes.number,
  tag: PropTypes.string,
  align: PropTypes.oneOf(["left", "center", "right"]),
  opacity: PropTypes.number,
  weight: PropTypes.oneOf(["bold", "semibold", "medium", "regular", "light"]),
  color: PropTypes.oneOf(["black", "white", "gray", "slide", "error", "description", ""]),
  size: PropTypes.number,
  customClass: PropTypes.string,
};

export default Text;
