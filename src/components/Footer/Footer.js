import React from 'react';
import styles from './Footer.module.scss';
import Link from '../Link/Link';
import Subtitle from "./../../components/Subtitle/Subtitle"


const links = [
    { text: "Facebook", href: "/" },
    { text: "Instagram", href: "/" },
    { text: "Linkedin", href: "/" },
    { text: "Behance", href: "/" }
]

const Footer = () => {
    return (
        <footer className={styles.Footer}>
            {/*  <Subtitle text="contactanos"></Subtitle> */}
            <div className={styles.footerMail}>
                {/* <h3>Contactanos</h3> */}
                <a href="">info@empresa.com</a>
            </div>
            <div className={styles.endFooter}>
                <nav className={styles.footerSocial}>
                    <ul className={styles.LinksContainer}>
                        {links.map((link, index) => (<li><Link key={index} text={link.text} href={link.href}></Link></li>))}
                    </ul>
                </nav>
                <div className={styles.footerLegales}>
                    <h5>desarrollado por <a href="">marca</a></h5>
                </div>
            </div>
        </footer>
    )
}

export default Footer;