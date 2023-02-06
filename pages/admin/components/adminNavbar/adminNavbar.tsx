import React from 'react';
import styles from './adminNavbar.module.scss'
import Link from "next/link";
const Index = () => {
    return (
        <div>
            <nav className={styles.navbar}>
                <ul className={styles.navbar__list}>
                    <Link className={styles.navbar__list_item} href="/admin/order">Товары</Link>
                    <Link className={styles.navbar__list_item} href="/admin/addProduct">Добавить товары</Link>
                </ul>
            </nav>
        </div>
    );
}

export default Index;