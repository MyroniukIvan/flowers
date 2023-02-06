import React from 'react';
import styles from './adminNavbar.module.scss'
import Link from "next/link";
const Index = () => {
    return (
        <div>
            <nav className={styles.navbar}>
                <ul className={styles.navbar__list}>
                    <li className={styles.navbar__list_item}><Link href="admin/">Общее</Link></li>
                    <li className={styles.navbar__list_item}><Link href="admin/components/allProducts">Товары</Link></li>
                    <li className={styles.navbar__list_item}><Link href="admin/components/addProduct">Добавить товары</Link></li>
                    <li className={styles.navbar__list_item}><Link href="admin/components/orders">Заказы</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Index;