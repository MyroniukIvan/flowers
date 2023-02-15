import React from 'react';
import AccordionFooterMenu from "./components/accordion/accordion";
import styles from './Catalog.module.scss'


const Index = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
            <h1>Каталог</h1>
            </div>
            <AccordionFooterMenu/>
        </div>
    );
};

export default Index;