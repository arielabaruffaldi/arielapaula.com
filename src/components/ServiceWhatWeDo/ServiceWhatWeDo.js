import React from 'react';
import ServiceCard from './../ServiceCard/ServiceCard';
import styles from "./ServiceWhatWeDo.module.scss";

const servicios = [
    {
        icon: '"./test.jpg"',
        title: "Research",
        listItems: ["Qualitative and quantitative user research", "Qualitative and quantitative user research", "Qualitative and quantitative user research"]
    },
    {
        icon: "./test.jpg",
        title: "Strategy",
        listItems: ["Qualitative and quantitative user research", "Qualitative and quantitative user research", "Qualitative and quantitative user research"]
    },
    {
        icon: "./test.jpg",
        title: "Product Design",
        listItems: ["Qualitative and quantitative user research", "Qualitative and quantitative user research", "Qualitative and quantitative user research"]
    },
    {
        icon: "./test.jpg",
        title: "Product Design",
        listItems: ["Qualitative and quantitative user research", "Qualitative and quantitative user research", "Qualitative and quantitative user research"]
    }
]

const ServiceWhatWeDo = () => {
    return (
        <section className={styles.WhatWeDo}>
            <ServiceCard items={servicios}></ServiceCard>
        </section>
    )
}

export default ServiceWhatWeDo;