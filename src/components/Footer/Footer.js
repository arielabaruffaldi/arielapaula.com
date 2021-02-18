import React from 'react';
import styles from './Footer.module.scss';
import Button from '../../components/Button/Button';

const links = [
    /* { text: "Facebook", href: "/" }, */
    /*  { text: "Instagram", href: "/" }, */
    { text: "Linkedin", href: "https://www.linkedin.com/in/arielabaruffaldi/" },
    { text: "Behance", href: "https://www.behance.net/arielapaula" },
    { text: "GitHub", href: "https://github.com/arielapaula" }
]
const Footer = () => {
    return (
        <footer className={styles.Footer} id="footer">
            <div className={styles.footerMail}>
                <a href="mailto:baruffaldiariela@gmail.com">baruffaldiariela@gmail.com</a>
            </div>
            <div className={styles.endFooter}>
                <nav className={styles.footerSocial}>
                    <ul className={styles.LinksContainer}>
                        {links.map((link, index) => (<li key={index}><a href={link.href} target="_blank" rel="noopener noreferrer">{link.text}</a></li>))}
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