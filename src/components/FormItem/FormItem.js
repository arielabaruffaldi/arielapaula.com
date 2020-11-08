import React from 'react';
import Text from "./../../components/Text/Text";
import styles from "./FormItem.module.scss"
const FormItem = ({ label, tag, registrar, placeholder, children, ...props }) => {
    const CustomInput = tag;
    return (
        <div className={styles.FormItem}>
            {label && <Text tag="label" size={.8} color="black">{label}</Text>}
            {tag &&
                <CustomInput
                    placeholder={placeholder}
                    ref={registrar}
                    {...props}
                />
            }
            {children}
        </div>
    )
}

export default FormItem;