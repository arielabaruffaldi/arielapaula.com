import React, { useState, useEffect } from 'react';
import Link from '../Link/Link'
import styles from './Nav.module.scss';
import { useMediaQuery } from 'react-responsive'
import { slide as Menu } from 'react-burger-menu';
import './NavMobile.scss';
import { useLocation } from "react-router-dom";
/* import {ReactComponent as Logo} from './../../logo.svg'; */

const links = [
    { text: "servicios", href: "/servicios" },
    { text: "portfolio", href: "/portfolio" },
    { text: "contacto", href: "/contacto" }
]

const Nav = () => {
    const location = useLocation()
    const [scrollPosition, setSrollPosition] = useState(0);
    const [scrollingUp, setScrollingUp] = useState(false);

    const isMobile = useMediaQuery({
        query: '(max-width: 660px)'
    })

    const handleScroll = () => {
        const position = window.pageYOffset;
        setSrollPosition(position)
        position < scrollPosition ? setScrollingUp(true) : setScrollingUp(false)
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    const blackNav = location.pathname === "/contacto" || location.pathname === "/servicios"? styles.blackNav : "";

    return (
        <>
            {!isMobile &&
                <header className={`${styles.Nav} ${!scrollingUp && scrollPosition > 50 ? styles.hiddenNav : ""} ${scrollingUp && scrollPosition > 50 ? styles.ScrolledNav : ""} ${blackNav}`}>
                    <nav>
                        <Link key={"logo"} href={"/"} classes={styles.Logo}>
                            ab.
                           {/*  <Logo/> */}
                        </Link>
                        <ul className={styles.LinksContainer}>
                            {links.map((link, index) => (<li key={index}><Link  text={link.text} href={link.href}></Link></li>))}
                        </ul>
                    </nav>
                </header>}

            {isMobile && (
                <header>
                    <Menu width={"100%"}>
                        <ul className={styles.LinksContainer}>
                            {links.map((link, index) => (<li key={index}><Link text={link.text} href={link.href} size={.8}></Link></li>))}
                        </ul>
                    </Menu>
                </header>
            )
            }

        </>
    )
}

export default Nav;