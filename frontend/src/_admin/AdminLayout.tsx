import { Outlet, useNavigate } from "react-router-dom";
import SidebarLeft from "../components/shared/SidebarLeft";
import { useAuth } from "@/context/Auth";
import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";

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
            <div className="w-full sm:flex">
                <SidebarLeft />

                <section className="flex flex-1 h-full">
                    <Outlet />
                </section>
                <Toaster/>
            </div>
        </>
    );
};

export default AdminLayout;
