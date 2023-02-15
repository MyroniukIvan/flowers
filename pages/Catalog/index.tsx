import React from 'react';
import AccordionFooterMenu from "./components/accordion/accordion";
import styles from './Catalog.module.scss'
import Link from "next/link";


const Index = () => {
    return (
        <div className={styles.container}>
            <div className={styles.navbar}>
                <Link href={'/'}><p>Головна</p></Link>
                <Link href={'/Catalog'}><p className={styles.disabled}>Каталог</p></Link>
            </div>
            <div className={styles.header}>
                <h1>Каталог</h1>
            </div>
            <AccordionFooterMenu/>
        </div>
    );
};

export default Index;