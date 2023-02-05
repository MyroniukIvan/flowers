import React from 'react';
import styles from './footer.module.scss'
import Image from "next/image";
import logo from './assets/image 27.svg'

const Index = () => {
    return (
        <footer className={styles.footer}>
            <div>
                <div className={styles.wrapper}>
                    <div className={styles.upper}>
                        <div><Image style={{color:"white"}} className={styles.logo} src={logo} alt={'logo'}/></div>
                        <div className={styles.upperFlex}>
                            <div className={styles.upperFlexColumn}>
                                <p>ИНФОРМАЦИЯ</p>
                                <p>О НАС</p>
                                <p>ДОСТАВКА И ОПЛАТА</p>
                                <p>ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</p>
                            </div>
                            <div className={styles.upperFlexColumn}>
                                <p>ИНФОРМАЦИЯ</p>
                                <p>О НАС</p>
                                <p>ДОСТАВКА И ОПЛАТА</p>
                                <p>ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</p>
                            </div>
                            <div className={styles.upperFlexColumn}>
                                <p>ИНФОРМАЦИЯ</p>
                                <p>О НАС</p>
                                <p>ДОСТАВКА И ОПЛАТА</p>
                                <p>ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</p>
                            </div>
                            <div className={styles.upperFlexColumn}>
                                <p>ИНФОРМАЦИЯ</p>
                                <p>О НАС</p>
                                <p>ДОСТАВКА И ОПЛАТА</p>
                                <p>ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Index;