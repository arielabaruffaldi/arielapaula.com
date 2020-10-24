import React from "react";
import { NavLink } from "react-router-dom";
import styles from './Link.module.scss'

const Link = ({ href, text, onClick, children }) => {
  return (

    <NavLink to={`${href}`} activeClassName="activeCategory" className={styles.Link} onClick={onClick}>
      {text && text}
      {children}
    </NavLink>

  );
};

export default Link;
