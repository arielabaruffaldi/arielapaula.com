import React from 'react';
import styles from './Footer.module.scss';
import Link from '../Link/Link'

const links = [
    { text: "Facebook", href: "/" },
    { text: "Instagram", href: "/" },
    { text: "Linkedin", href: "/" },
    { text: "Behance", href: "/" }
]

const Footer = () => {
    return (
        <footer className={styles.Footer}>
            <div>
                <h3>Comentanos tu próximo proyecto</h3>
                <a href="">info@empresa.com</a>
            </div>
            <nav className={styles.footerSocial}>
                <ul className={styles.LinksContainer}>
                    {links.map((link, index) => (<li><Link key={index} text={link.text} href={link.href}></Link></li>))}
                </ul>
            </nav>
            <div className={styles.footerLegales}>
                <span>Todos los derechos reservados.</span>
                <h5>desarrollado por <a href="">marca</a></h5>
            </div>
        </footer>
    )
}

export default Footer;