import React from 'react';
import ServiceWhatWeDo from '../../components/ServiceWhatWeDo/ServiceWhatWeDo';
import Text from "./../../components/Text/Text";
import styles from "./Servicios.module.scss";

const Servicios = () => {
    return (
        <>
        <section className={styles.Servicios}>
            <div>
                <Text priority={1} color="black" hasPadding classes={styles.title}>Trabajamos como una extensión de tu equipo</Text>
                <Text tag="p" color="black" hasPadding classes={styles.subtitle}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</Text>
            </div>
            <img src="./assets/servicios.png"></img>
        </section>
        <ServiceWhatWeDo></ServiceWhatWeDo>
        </>
    )
}

export default Servicios