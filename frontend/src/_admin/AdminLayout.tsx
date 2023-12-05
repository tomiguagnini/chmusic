import { Outlet } from "react-router-dom";
import SidebarLeft from "../components/shared/SidebarLeft";

const AdminLayout = () => {
    return (
        <>
            <div className="w-full md:flex">
                <SidebarLeft />

                <section className="flex flex-1 h-full">
                    <Outlet />
                </section>
            </div>
        </>
    );
};

export default AdminLayout;
