import AdminNavbar
    from "../../pages/admin/components/adminNavbar/adminNavbar";
import React from "react";
import styles from './layout.module.scss';

type DashboardLayoutProps = {
    children: React.ReactNode,
    criteria: React.ReactNode
};
const Layout = ({children, criteria}:DashboardLayoutProps) => {

    return (
        <div className={styles.wrapper}>
            {criteria ? null : <AdminNavbar/>}
            {children}
        </div>
    );
}

export default Layout;