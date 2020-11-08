import React from 'react';
import Typed from 'react-typed';
import Subtitle from "./../../components/Subtitle/Subtitle";
import Form from "./../../components/Form/Form";
import styles from "./Contacto.module.scss";
const Contacto = () => {
    return (
        <section className={styles.Contacto}>
            <Subtitle text="contacto" priority={1} ></Subtitle>
            <Form></Form>
        </section>
    )
}

export default Contacto