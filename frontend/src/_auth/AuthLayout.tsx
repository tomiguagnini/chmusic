
import { Outlet } from "react-router-dom";

function AuthLayout() {
    return (
        <>
        <section className="common-container h-screen">
        <h1 className="text-4xl">Login</h1>
            <Outlet />
        </section>
        </>
    );
}

export default AuthLayout;
