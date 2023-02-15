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
import map from '../../../../assets/map.svg'


const Map = () => {
    return (
        <div className={styles.container}>
            <div className={styles.map}>
                <Image src={map} alt={'map'}/>
                <div className={styles.onMapCard}>
                    <div className={styles.onMapCardFlex}>
                        <Image src={logo} alt={'logo'}/>
                        <div className={styles.onMapCardFlexChild}>
                            <div className={styles.media}>
                                <div style={{display: 'flex', gap: '9px'}}>
                                    <Image src={phone} alt={'phone'}/>
                                    <p>Телефон:</p>
                                </div>
                                <div>
                                    <p>+38 (063) 829 30 30</p>
                                    <p>+38 (067) 829 30 30</p>
                                </div>
                               </div>
                            <div className={styles.media}>
                                <div style={{display: 'flex', gap: '9px'}}>
                                    <Image src={skype} alt={'skype'}/>
                                    <p>Skype</p>
                                </div>
                                <p>Flowers-Ukraine</p>
                            </div>
                            <div className={styles.media}>
                                <div style={{display: 'flex', gap: '9px'}}>
                                    <Image src={mail} alt={'mail'}/>
                                    <p>Почта</p>
                                </div>
                                <p>flowers.ukraine2014@gmail.com</p>
                            </div>
                            <div className={styles.mediaIcons} style={{display: 'flex', gap: '21px', paddingLeft: '12px'}}>
                                <Image src={instagram} alt={'instagram'}/>
                                <Image src={viber} alt={'viber'}/>
                                <Image src={facebook} alt={'facebook'}/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Map;