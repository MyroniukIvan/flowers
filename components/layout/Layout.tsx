import AdminNavbar
    from "../../pages/admin/components/adminNavbar/adminNavbar";
import React from "react";

type DashboardLayoutProps = {
    children: React.ReactNode,
    criteria: React.ReactNode
};
const Layout = ({children, criteria}:DashboardLayoutProps) => {

    return (
        <div>
            {criteria ? null : <AdminNavbar/>}
            {children}
        </div>
    );
}

export default Layout;