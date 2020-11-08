import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import styles from "./Form.module.scss";
import FormItem from "./../FormItem/FormItem"
import Text from "./../../components/Text/Text";
import Typed from 'react-typed';


const Form = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);
    const [valueTextarea, setValueTextarea] = useState("");
    const strings = ['Buenos días,', 'Buenas noches'];
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.Form}>
                <FormItem label={"Escribí tu mensaje"}>
                    <Typed
                        strings={strings}
                        typeSpeed={70}
                        backSpeed={60}
                        startDelay={100}
                        backDelay={800}
                        smartBackspace={true}
                        attr={'placeholder'}
                        bindInputFocusEvents={true}
                        //showCursor={false}
                        onComplete={() => setValueTextarea(strings[strings.length-1])}
                    >
                        <textarea name="message" defaultValue={valueTextarea} />
                    </Typed>
                </FormItem>

                <FormItem
                    tag="input"
                    name="email"
                    type="email"
                    placeholder={"email"}
                    registrar={register({
                        required: {
                            value: true,
                            message: "El campo es requerido.",
                        },
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "No es un mail válido",
                        },
                    })}
                    label={"Dejanos tu email"}
                />
                {errors.email && (
                    <p role="alert">
                        {errors.email.message}
                    </p>
                )}
                <FormItem
                    tag="input"
                    name="phone"

                    type="number"
                    placeholder={"email"}
                    registrar={register({
                        required: {
                            value: true,
                            message: "El campo es requerido.",
                        },
                        pattern: {
                            value: /[0-9]{10}/,
                            message: "El numero debe contener 10 dígitos",
                        },
                    })}
                    label={"Dejanos tu celular"}
                />
                {errors.email && (
                    <p role="alert">
                        {errors.email.message}
                    </p>
                )}
                <input type="submit" />
                {errors.exampleRequired && <span>This field is required</span>}
            </form>
        </>
    )
}

export default Form;