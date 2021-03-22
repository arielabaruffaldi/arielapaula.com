import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import styles from "./Form.module.scss";
import FormItem from "./../FormItem/FormItem"
import Typed from 'react-typed';
import Button from '../../components/Button/Button';
import axios from "axios";
import ContactInfo from "./../../components/ContactInfo/ContactInfo";

const Form = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [success, setSuccess] = useState(false);
    const API_PATH = 'http://arielapaula.com/index.php';

    const onSubmit = (data) => {
        setSuccess(true)

        axios({
            method: 'post',
            url: `${API_PATH}`,
            headers: { 'content-type': 'application/json' },
            data: data
        })
            .then(result => {
                console.log(result)
                window.scrollTo(0, 0);
                setSuccess(true)
            })
            .catch(error => console.log(error.message));

    };

    return (
        <div className={styles.Form}>

            {!success ?
                <>
                    <form action="#" onSubmit={handleSubmit(onSubmit)} method="POST">
                        {/*   <Typed
                            strings={strings}
                            typeSpeed={70}
                            backSpeed={60}
                            startDelay={100}
                            name="message"
                            backDelay={800}
                            smartBackspace={true}
                            attr={'placeholder'}
                            bindInputFocusEvents={true}
                            showCursor={false}
                            onComplete={() => setValueTextarea(strings[strings.length - 1])}
                        >
                            <textarea  name="message" defaultValue={valueTextarea} ref={register({
                                required: {
                                    value: true,
                                    message: "El campo es requerido.",
                                },
                            })} />
                        </Typed> */}
                        <FormItem
                            tag="textarea"
                            name="message"
                            placeholder={"Hola! Te contacto para"}
                            registrar={register({
                                required: {
                                    value: true,
                                    message: "El campo es requerido.",
                                },
                            })}
                            label={"Dejanos tu mensaje"}
                        ></FormItem>
                        <div className={styles.formRow}>
                            <FormItem
                                tag="input"
                                name="name"
                                type="text"
                                placeholder={"Jerry Seinfeld"}
                                registrar={register({
                                    required: {
                                        value: true,
                                        message: "El campo es requerido.",
                                    },
                                    pattern: {
                                        value: /^[A-Z]/i,
                                        message: "No es un nombre válido",
                                    },
                                })}
                                label={"Dejanos tu nombre"}
                            >
                                {errors.name && (
                                    <p role="alert" className={styles.errorMessage}>
                                        {errors.name.message}
                                    </p>
                                )}
                            </FormItem>
                            <FormItem
                                tag="input"
                                name="email"
                                type="email"
                                placeholder="@"
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
                            >
                                {errors.email && (
                                    <p role="alert" className={styles.errorMessage}>
                                        {errors.email.message}
                                    </p>
                                )}
                            </FormItem>

                            {/*  <FormItem
                                tag="input"
                                name="phone"
                                type="number"
                                placeholder={"(xx) xxxx xxxx"}
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
                            >
                                {errors.phone && (
                                    <p role="alert" className={styles.errorMessage}>
                                        {errors.phone.message}
                                    </p>
                                )}
                            </FormItem> */}

                        </div>
                        <Button type="submite" size={1} tag={"button"} color="grey" weight={500} onClick={handleSubmit(onSubmit)}>enviar formulario</Button>
                    </form>
                    <ContactInfo></ContactInfo>
                </>
                :
                <div className={styles.success}>
                    <h1>
                        <Typed
                            strings={['Gracias!']}
                            typeSpeed={70}
                            backSpeed={60}
                            backDelay={800}
                            showCursor={false}
                        >
                        </Typed>
                    </h1>
                </div>
            }
        </div>
    )
}

export default Form;