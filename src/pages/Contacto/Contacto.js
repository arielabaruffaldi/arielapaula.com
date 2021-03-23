import React from 'react';
import Form from "./../../components/Form/Form";
import styles from "./Contacto.module.scss";
import IsLoadingHOC from "./../../utils/IsLoadingHOC";

const Contacto = () => {
    return (
        <section className={styles.Contacto}>
            <Form></Form>
        </section>
    )
}

export default IsLoadingHOC(Contacto)