import React, { useState, useEffect } from 'react';
import Link from '../Link/Link'
import styles from './Nav.module.scss';
import './NavMobile.scss';
import { useMediaQuery } from 'react-responsive'
import { slide as Menu } from 'react-burger-menu';
import { useLocation } from "react-router-dom";
import Button from '../Button/Button';
/* import {ReactComponent as Logo} from './../../logo.svg'; */

const links = [
    { text: "servicios", href: "/servicios" },
    { text: "proyectos", href: "/proyectos" },
    { text: "contacto", href: "/contacto" }
]

const Nav = () => {
    const location = useLocation()
    const [scrollPosition, setSrollPosition] = useState(0);
    const [scrollingUp, setScrollingUp] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const isMobile = useMediaQuery({
        query: '(max-width: 660px)'
    })

    const handleScroll = () => {
        const position = window.pageYOffset;
        setSrollPosition(position)
        position < scrollPosition ? setScrollingUp(true) : setScrollingUp(false)
    };

    const toggleMenu = () => {
        isOpen ? setIsOpen(false) : setIsOpen(true)
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });



    const blackNav = location.pathname === "/contacto" || location.pathname === "/servicios" ? styles.blackNav : "";

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
                            {links.map((link, index) => (<li key={index}><Link text={link.text} href={link.href}></Link></li>))}
                        </ul>
                    </nav>
                </header>}

            {isMobile && (
                <header className={`${!scrollingUp && scrollPosition > 50 && !isOpen ? "hiddenNav" : ""} ${"isMobile"} ${scrollingUp && scrollPosition > 50 ? "ScrolledNav" : ""} ${isOpen ? "navOpen" : ""} ${location.pathname === "/contacto" || location.pathname === "/servicios" ? "blackNav" : ""}`}>
                    <div className={"NavWrapper"}>
                        <Link key={"logo"} href={"/"} classes={"Logo"} onClick={()=>setIsOpen(false)}>
                            ab.
                        </Link>
                        <div className={`burger ${isOpen ? "burgerOpen" : ""}`} onClick={toggleMenu}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>

                    <nav className={`NavLinks navbar ${isOpen ? "navOpen" : ""}`}>
                        <ul className={"navLinks"}>
                            {links.map((link, index) => (<li key={index} className={`${isOpen ? "navLinkOpen" : ""}`}><Link text={link.text} href={link.href} onClick={toggleMenu}></Link></li>))}
                        </ul>
                    </nav>
                </header>
            )
            }

        </>
    )
}

export default Nav;