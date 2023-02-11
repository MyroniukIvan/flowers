import React from 'react';
import styles from './footer.module.scss'
import Image from "next/image";
import logo from '../../assets/logoDarkMode.svg'
import visa from '../../assets/visa.svg'
import visaElectron from '../../assets/visaElectron.svg'
import maestro from '../../assets/maestro.svg'
import masterCard from '../../assets/mastercard.svg'
import privatBank from '../../assets/privat.svg'
import liqPay from '../../assets/liqpay.svg'
import Info from "./components/Info";
import Additionally from "./components/Additionally";
import Personal from "./components/Personal";
import Support from "./components/Support";
import AccordionFooterMenu
    from "./components/AccordionFooterMenu/AccordionFooterMenu";

const Index = () => {
    return (

        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footer__links}>
                    <div className={styles.footer__links_logo}>
                        <Image style={{color: "white"}}
                               className={styles.logo} src={logo}
                               alt={'logo'}/>
                    </div>
                    <div className={styles.footer__links_wrapper}>

                        <div className={styles.footer__links_wrapper_info}>
                            <h2>ІНФОРМАЦІЯ</h2>
                            <Info/>
                        </div>
                        <div className={styles.footer__links_wrapper_support}>
                            <h2>ІНФОРМАЦІЯ</h2>
                            <Additionally/>
                        </div>
                        <div className={styles.footer__links_wrapper_personal}>
                            <h2>ІНФОРМАЦІЯ</h2>
                            <Personal/>
                        </div>
                        <div
                            className={styles.footer__links_wrapper_additionally}>
                            <h2>ІНФОРМАЦІЯ</h2>
                            <Support/>
                        </div>
                    </div>
                    <div className={styles.accordionFooterMenu}>
                        <AccordionFooterMenu/>
                    </div>

                </div>
                <div>
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
            </div>

        </footer>
    );
};

export default Index;