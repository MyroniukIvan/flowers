import React, {useEffect} from 'react';
import styles from './header.module.scss'
import Image from "next/image";

import line from '../../assets/Line.svg'
import heart from '../../assets/heart.svg'
import truck from '../../assets/truck.svg'
import phone from '../../assets/phone.svg'
import user from '../../assets/user.svg'
import Link from "next/link";
import {onAuthStateChanged, signOut} from "@firebase/auth";
import {auth} from "../../firebase/config";
import {useRouter} from "next/navigation";
import {useDispatch} from "react-redux";
import {
    REMOVE_ACTIVE_USER, SET_ACTIVE_USER
} from "../../redux/slice/authSlice";
import ShowOnLogin from "../authLink";
import {ShowOnLogout} from "../authLink";


const Index = () => {
    const navigate = useRouter()

    const logoutUser = () => {
        signOut(auth).then(() => {
            navigate.push('/productPage')
        }).catch((error) => {
            alert(error.message)
        });
    }

    const dispatch = useDispatch()
    //перевіряєм чи юзер залогінений
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch(SET_ACTIVE_USER({
                    email: user.email, userName: user.displayName, userId: user.uid,
                }))
            } else {
                dispatch(REMOVE_ACTIVE_USER({}))
            }
        });
    }, [dispatch])


    return (<div className={styles.container}>
            <div className={styles.headerMain}>
                <div className={styles.headerMainFlexbox}>
                    <div className={styles.secondaryFlexbox}>
                        <div className={styles.price}>
                            <p className={styles.p}>Валюта</p>
                            <span>Uah</span>
                        </div>
                    </div>
                    <Image className={styles.line} src={line} alt="line"/>
                    <div className={styles.secondaryFlexbox}>
                        <p className={styles.p}>Язык</p>
                        <span>RU</span>
                    </div>
                    <div className={styles.secondaryFlexbox}>
                        <p className={styles.p}>Город</p>
                        <span className={styles.span}>Киев</span>
                    </div>
                    <div className={styles.secondaryFlexbox}>
                        <span><Image className={styles.heart} src={heart} alt={'likes img'}/></span>
                        <p className={styles.p}>Закладки</p>
                    </div>
                    <Image className={styles.line} src={line} alt="line"/>
                    <div className={styles.secondaryFlexbox}>
                        <span><Image src={truck} alt={'likes img'}/></span>
                        <p className={styles.delivery}>Доставка и оплата</p>
                    </div>
                    <div className={styles.secondaryFlexbox}>
                        <span><Image className={styles.phone}  src={phone} alt={'likes img'}/></span>
                        <p className={styles.p}>Контакты</p>
                    </div>
                </div>
                <Image className={styles.line} src={line} alt="line"/>
                <div className={styles.headerMainRegistration}>
                    <ShowOnLogout>
                        <Image src={user} alt={'user'}/>
                        <Link className={styles.link} href='/login'>Вход</Link>
                        <Link href='/login'><Image className={styles.line} src={line} alt="line"/></Link>
                        <Link className={styles.link} href='/auth'>Регистрация</Link>
                    </ShowOnLogout>

                    <ShowOnLogin>
                        <div>
                            <Link href='/login' onClick={logoutUser}>Выход</Link>
                        </div>
                    </ShowOnLogin>

                </div>
            </div>
        </div>);
};

export default Index;