import React from 'react';
import Text from "./../../components/Text/Text";
import styles from "./ContactInfo.module.scss";

const ContactInfo = () => {
    return (
        <aside className={styles.ContactInfo}>
            <div>
                <Text tag="p" size={.8} color="black">teléfono</Text>
                <Text tag="a" size={2} color="black" href="tel:1162187284" weight={"regular"}>1162187284</Text>
            </div>
            <div>
                <Text tag="p" size={.8} color="black">mail</Text>
                <Text tag="a" size={2} color="black" href="mailto:baruffaldiariela@gmail.com" weight={"regular"}>baruffaldiariela@gmail.com</Text>
            </div>
            <Text tag="address" size={.8} color="black" >CABA(Buenos Aires), Argentina</Text>
        </aside>
    )
}

export default ContactInfo;