import React from 'react';
import Text from "./../../components/Text/Text";
import styles from "./ContactInfo.module.scss";

const ContactInfo = () => {
    return (
        <aside className={styles.ContactInfo}>
            <div>
                <Text tag="p" size={.8} color="black">o llamanos</Text>
                <Text tag="a" size={2} color="black" href="tel:1162187284" weight={"regular"}>1162187284</Text>
            </div>
            {/* <div>
                <Text tag="p" size={.8} color="black">o escribinos</Text>
                <Text tag="a" size={2} color="black" href="mailto:info@info.com" weight={"regular"}>info@info.com</Text>
            </div> */}
            <Text tag="address" size={.8} color="black" >direccion 123, Buenos Aires, bla bla bla bla bla bla bla bla bla bla</Text>
        </aside>
    )
}

export default ContactInfo;