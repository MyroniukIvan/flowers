import React from 'react';
import styles from './footer.module.scss'
import Image from "next/image";
import logo from '../../assets/logoDarkMode.svg'
import visa from '../../assets/visa.svg'
import visaElectron from '../../assets/visaElectron.svg'
import maestro from '../../assets/maestro.svg'
import masterCard from '../../assets/mastercard.svg'
import privatBank from '../../assets/privat.svg'
import liqPay from '../../assets/liqPay.svg'

const Index = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.length}>
                <div className={styles.wrapper}>
                    <div className={styles.upper}>
                        <div><Image style={{color: "white"}} className={styles.logo} src={logo} alt={'logo'}/></div>
                        <div className={styles.upperFlex}>
                            <div className={styles.upperFlexColumn}>
                                <a href={''}>ИНФОРМАЦИЯ</a>
                                <a href={''}>О НАС</a>
                                <a href={''}>ДОСТАВКА И ОПЛАТА</a>
                                <a href={''}>ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</a>
                            </div>
                            <div className={styles.upperFlexColumn}>
                                <a href={''}>ИНФОРМАЦИЯ</a>
                                <a href={''}>О НАС</a>
                                <a href={''}>ДОСТАВКА И ОПЛАТА</a>
                                <a href={''}>ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</a>
                            </div>
                            <div className={styles.upperFlexColumn}>
                                <a href={''}>ИНФОРМАЦИЯ</a>
                                <a href={''}>О НАС</a>
                                <a href={''}>ДОСТАВКА И ОПЛАТА</a>
                                <a href={''}>ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</a>
                            </div>
                            <div className={styles.upperFlexColumn}>
                                <a href={''}>ИНФОРМАЦИЯ</a>
                                <a href={''}>О НАС</a>
                                <a href={''}>ДОСТАВКА И ОПЛАТА</a>
                                <a href={''}>ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.lowerFlexInner}>
                    <div>
                        <p>Copyright © 2021. Все права защищены</p>
                    </div>
                    <div className={styles.lowerFlex}>
                        <p>Способы оплаты:</p>
                        <a href="">
                            <Image src={privatBank} alt={'privatBank'}/>
                        </a>
                        <a href="">
                            <Image src={liqPay} alt={'liqpay'}/>
                        </a>
                        <a href="">
                            <Image src={masterCard} alt={'masterCard'}/>
                        </a>
                        <a href="">
                            <Image src={maestro} alt={'maestro'}/>
                        </a>
                        <a href="">
                            <Image src={visaElectron} alt={'visaElectron'}/>
                        </a>
                        <a href="">
                            <Image src={visa} alt={'visa'}/>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Index;