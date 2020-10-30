import React from "react";
import { NavLink } from "react-router-dom";
import styles from './Link.module.scss'

const Link = ({ href, text, onClick, children, classes, size = 1 }) => {
  return (

    <NavLink to={`${href}`} activeClassName="activeCategory" className={
      `${styles.Link} ${classes ? classes : ""}`} onClick={onClick} style={{ fontSize: `${size}rem` }}>
      { text && text}
      { children}
    </NavLink >

  );
};

export default Link;
