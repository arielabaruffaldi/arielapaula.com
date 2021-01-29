import React, { useEffect } from 'react';
import styles from './Footer.module.scss';
import Link from '../Link/Link';
import Button from '../../components/Button/Button';

const links = [
    /* { text: "Facebook", href: "/" }, */
    /*  { text: "Instagram", href: "/" }, */
    { text: "Linkedin", href: "https://www.linkedin.com/in/arielabaruffaldi/" },
    { text: "Behance", href: "https://www.behance.net/arielapaula" },
    { text: "GitHub", href: "https://github.com/arielapaula" }
]
const Footer = () => {
    const onScroll = () => {
        //console.log(document.getElementById('footer'))

    }
    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => document.removeEventListener("scroll", onScroll);
    })
    return (
        <footer className={styles.Footer} id="footer">
            <div className={styles.footerMail}>
                <a href="mailto:baruffaldiariela@gmail.com">baruffaldiariela@gmail.com</a>
            </div>
            <div className={styles.endFooter}>
                <nav className={styles.footerSocial}>
                    <ul className={styles.LinksContainer}>
                        {links.map((link, index) => (<li key={index}><Link size={.8} text={link.text} href={link.href}></Link></li>))}
                    </ul>
                </nav>
                <div className={styles.footerLegales}>
                    <Button color="gray" size={.8} weight={500} tag={"a"} href="#">desarrollado por Ariela Baruffaldi</Button>
                </div>
            </div>
        </footer>
    )
}

export default Footer;