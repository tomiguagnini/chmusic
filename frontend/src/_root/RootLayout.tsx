import Header from "@/components/shared/Header";
import { CartProvider } from "@/context/cart";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
    return (
        <CartProvider>
            <Header />
            <div className="flex-col h-full justify-center mt-16">
                <Outlet />
            </div>
        </CartProvider>
    );
};

export default RootLayout;
