import React from 'react';
import styles from './map.module.scss'
import Image from "next/image";
import logo from '../../../../assets/logo.svg'
import instagram from '../../../../assets/instagram.svg'
import viber from '../../../../assets/viber.svg'
import facebook from '../../../../assets/facebook.svg'
import phone from '../../../../assets/phone.svg'

import skype from '../../../../assets/skype.svg'
import mail from '../../../../assets/mail.svg'


const Map = () => {
    return (
        <div>
            <div className={styles.map}>
                <div className={styles.onMapCard}>
                    <div className={styles.onMapCardFlex}>
                        <Image src={logo} alt={'logo'}/>
                        <div className={styles.onMapCardFlexChild}>
                            <div>
                                <div style={{display: 'flex', gap: '9px'}}>
                                    <Image src={phone} alt={'phone'}/>
                                    <p>Телефон:</p>
                                </div>
                                <p>+38 (063) 829 30 30</p>
                                <p>+38 (067) 829 30 30</p></div>
                            <div>
                                <div style={{display: 'flex', gap: '9px'}}>
                                    <Image src={skype} alt={'skype'}/>
                                    <p>Skype</p>
                                </div>
                                <p>Flowers-Ukraine</p>
                            </div>
                            <div>
                                <div style={{display: 'flex', gap: '9px'}}>
                                    <Image src={mail} alt={'mail'}/>
                                    <p>Почта</p>
                                </div>
                                <p>flowers.ukraine2014@gmail.com</p>
                            </div>
                            <div style={{display: 'flex', gap: '21px', paddingTop: '32px', paddingLeft: '12px'}}>
                                <Image src={instagram} alt={'instagram'}/>
                                <Image src={viber} alt={'viber'}/>
                                <Image src={facebook} alt={'facebook'}/>
                            </div>
                        </div>
                    </div>
                </div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10163.237661419817!2d30.53015465!3d50.444650499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce54cf04fe59%3A0x1cb608300c10e006!2sLypky%2C%20Kyiv%2C%2002000!5e0!3m2!1sen!2sua!4v1675364757377!5m2!1sen!2sua"
                    width="100%" height="508" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    );
};

export default Map;