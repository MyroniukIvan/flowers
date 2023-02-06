import SubHeader from "../subHeader";
import AdminNavbar
    from "../../../pages/admin/components/adminNavbar/adminNavbar";
import {any} from "prop-types";
import React, {ReactNode} from "react";

type DashboardLayoutProps = {
    children: React.ReactNode,
    criteria: React.ReactNode
};
const Layout = ({children, criteria}:DashboardLayoutProps) => {

    return (
        <div>
            {criteria ? <SubHeader/> : <AdminNavbar/>}
            {children}
        </div>
    );
}

export default Layout;