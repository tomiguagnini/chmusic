import { Outlet, useNavigate } from "react-router-dom";
import SidebarLeft from "../components/shared/SidebarLeft";
import { useAuth } from "@/context/Auth";
import { useEffect } from "react";

const AdminLayout = () => {
    const { isLogin } = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        if (!isLogin()) {
            navigate("/auth");
        }
    }, [isLogin, navigate]);
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
