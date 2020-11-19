import React from 'react';
import Form from "./../../components/Form/Form";
import styles from "./Contacto.module.scss";
import ContactInfo from "./../../components/ContactInfo/ContactInfo";

const Contacto = () => {
    return (
        <section className={styles.Contacto}>
            <Form></Form>
            <ContactInfo></ContactInfo>
        </section>
    )
}

export default Contacto