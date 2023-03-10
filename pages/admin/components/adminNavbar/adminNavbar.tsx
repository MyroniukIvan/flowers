import React from 'react';
import styles from './adminNavbar.module.scss'
import Link from "next/link";
const Index = () => {
    return (
        <div className={styles.container}>
            <nav className={styles.navbar}>
                <ul className={styles.navbar__list}>
                    <Link className={styles.navbar__list_item} href="/admin">Главная</Link>
                    <Link className={styles.navbar__list_item} href="/admin/viewProducts">Товары</Link>
                    <Link className={styles.navbar__list_item} href="/admin/addProduct">Добавить товары</Link>
                    <Link className={styles.navbar__list_item} href="/admin/order">Заказы</Link>
                    <Link className={styles.navbar__list_item} href="/admin/addAdmins">Адміни</Link>
                </ul>
            </nav>
        </div>
    );
}

export default Index;