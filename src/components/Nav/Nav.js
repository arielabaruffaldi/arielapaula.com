import React, { useState, useEffect } from 'react';
import Link from '../Link/Link'
import styles from './Nav.module.scss';
import { useMediaQuery } from 'react-responsive'
import { slide as Menu } from 'react-burger-menu';
import './NavMobile.scss';


const links = [
    { text: "servicios", href: "/servicios" },
    { text: "portfolio", href: "/portfolio" },
    { text: "contacto", href: "/contacto" }
]

const Nav = () => {

    const [scrollPosition, setSrollPosition] = useState(0);
    const [scrollingUp, setScrollingUp] = useState(false);
    const [click, setClick] = useState(false);

    const isMobile = useMediaQuery({
        query: '(max-width: 660px)'
    })

    const handleClick = () => {
        setClick(true)
    }

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

    console.log(scrollingUp)

    return (
        <>
            {!isMobile &&
                <header className={`${styles.Nav} ${!scrollingUp && scrollPosition > 50 ? styles.hiddenNav : ""} ${scrollingUp && scrollPosition > 50 ? styles.ScrolledNav : ""}`}>
                    <nav>
                        <Link key={"logo"} href={"/"}>
                            <img src="./logo.svg" alt="logo" />
                        </Link>
                        <ul className={styles.LinksContainer}>
                            {links.map((link, index) => (<li><Link key={index} text={link.text} href={link.href}></Link></li>))}
                        </ul>
                    </nav>
                </header>}

            {isMobile && (
                <header>
                    <Menu width={"100%"}>
                        <ul className={styles.LinksContainer}>
                            {links.map((link, index) => (<li><Link key={index} text={link.text} href={link.href} onClick={handleClick}></Link></li>))}
                        </ul>
                    </Menu>
                </header>
            )
            }

        </>
    )
}

export default Nav;