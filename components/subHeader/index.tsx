import React from 'react';
import Image from "next/image";
import styles from './subHeader.module.scss'
import viber from '../../assets/viber.svg'
import facebook from '../../assets/facebook.svg'
import instagram from '../../assets/instagram.svg'
import logo from '../../assets/logo.svg'
import search from '../../assets/search.svg'
import cart from '../../assets/cart.svg'
import heart from '../../assets/heart.svg'
import Link from "next/link";


const Index = () => {
    return (
        <div className={styles.container}>
            <div className={styles.mainFlexbox}>
                <Link href={'/'}>
                    <Image className={styles.logo} src={logo} alt={'logo'}/>
                </Link>
                <div className={styles.outerFlexbox}>

                    {/*wrapper for inputs*/}
                    <div className={styles.innerFlexbox}>
                        <div>
                            <input className={styles.input} type={"search"} placeholder={'Поиск по категориям'}/>
                        </div>
                        <div className={styles.inputSecondBlock}>
                            <input className={styles.inputSecond} type={"search"} placeholder={'Поиск по товарам'}/>
                            <Image className={styles.inputSecondIcon} src={search} alt={'search'}/>
                        </div>
                    </div>

                    {<div className={styles.secondaryFlexBox}>
                        <Link href={'./Catalog'}>Каталог товаров</Link>
                        <a href={''}>Форум</a>
                        <a href={''}>Отзывы</a>
                        <a href={''}>Акции</a>
                        <a href={''}>Новости</a>
                        <a href={''}>Информация</a>
                    </div>}
                </div>
                <div className={styles.outerFlexbox}>
                    <div className={styles.icons}>
                        <Image src={viber} alt={'viber'}/>
                        <Image src={instagram} alt={'instagram'}/>
                        <Image src={facebook} alt={'facebook'}/>
                    </div>
                    <div>
                        <p className={styles.removable}>+38 (067) 829 30 30</p>
                    </div>
                    <div className={styles.iconsSecondary}>
                        <Image className={styles.heart} style={{height: '33px', width: '29px'}} src={heart} alt={'heart'}/>
                        <Image className={styles.cart} src={cart} alt={'cart'}/>
                        <p className={styles.removable}>₴ 1 520</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Index;