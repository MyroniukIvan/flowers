import React from 'react';
import styles from './header.module.scss'
import Image from "next/image";

import line from './assets/Line.svg'
import heart from './assets/heart.svg'
import truck from './assets/truck.svg'
import phone from './assets/phone.svg'
import user from './assets/user.svg'
import Link from "next/link";
import {signOut} from "@firebase/auth";
import {auth} from "../../../firebase/config";
import {useRouter} from "next/navigation";

const Index = () => {
    const navigate = useRouter()
    const logoutUser = () => {
        signOut(auth).then(() => {
            navigate.push('/login')
            alert('ok')
        }).catch((error) => {
            alert(error.message)
        });
    }
    return (
        <div className={styles.headerMain}>
            <div className={styles.headerMainFlexbox}>
                <div className={styles.secondaryFlexbox}>
                    <p>Валюта</p>
                    <span>Uah</span>
                </div>
                <div className={styles.secondaryFlexbox}>
                    <p>Язык</p>
                    <span>RU</span>
                </div>
                <div className={styles.secondaryFlexbox}>
                    <p>Город</p>
                    <span>Киев</span>
                </div>
                <div className={styles.secondaryFlexbox}>
                    <span><Image src={heart} alt={'likes img'}/></span>
                    <p>Закладки</p>
                </div>
                <div className={styles.secondaryFlexbox}>
                    <span><Image src={truck} alt={'likes img'}/></span>
                    <p>Доставка и оплата</p>
                </div>
                <div className={styles.secondaryFlexbox}>
                    <span><Image src={phone} alt={'likes img'}/></span>
                    <p>Контакты</p>
                </div>
            </div>
            <div className={styles.headerMainRegistration}>
                <Image src={user} alt={'user'}/>
                <Link href='/login'>Вход</Link>
                <Image style={{paddingTop: '5px'}} src={line} alt="line"/>
                <Link href='/auth'>Регистрация</Link>
                <Link href='/' onClick={logoutUser}>Выход</Link>
            </div>
        </div>
    );
};

export default Index;