import React from 'react';
import Subtitle from "./../../components/Subtitle/Subtitle";
import Form from "./../../components/Form/Form";
import styles from "./Contacto.module.scss";
import ContactInfo from "./../../components/ContactInfo/ContactInfo";

const Contacto = () => {
    return (
        <section className={styles.Contacto}>
            {/* <Subtitle text="contacto" priority={1} ></Subtitle> */}
            <Form></Form>
            <ContactInfo></ContactInfo>
        </section>
    )
}

export default Contacto