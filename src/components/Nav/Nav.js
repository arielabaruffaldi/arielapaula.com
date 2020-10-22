import React, { useState } from 'react';
import Link from '../Link/Link'
import styles from './Nav.module.scss';
import { useMediaQuery } from 'react-responsive'
import { slide as Menu } from 'react-burger-menu';
import './NavMobile.scss';


const links = [
    {
        text: "servicios",
        href: "/servicios"
    },
    {
        text: "portfolio",
        href: "/portfolio"
    },
    {
        text: "contacto",
        href: "/contacto"
    }
]



const Nav = () => {
    const isMobile = useMediaQuery({
        query: '(max-width: 660px)'
    })
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(true)
    }

    console.log(click)
    return (
        <>
            {!isMobile ?
                <header className={styles.Nav}>
                    <nav>
                        <Link key={"logo"} text={"Logo"} href={"/"}></Link>
                        <ul className={styles.LinksContainer}>
                            {links.map((link, index) => (<li><Link key={index} text={link.text} href={link.href}></Link></li>))}
                        </ul>
                    </nav>
                </header> :
                <header>
                    <Menu width={"100%"}>
                        <ul className={styles.LinksContainer}>
                            {links.map((link, index) => (<li><Link key={index} text={link.text} href={link.href} onClick={handleClick}></Link></li>))}
                        </ul>
                    </Menu>
                </header>
            }

        </>
    )
}

export default Nav;