import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingCartIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import ItemsCartContainer from "./ItemsCartContainer";
import { useCart } from "@/hooks/useCart";

function Cart() {
    const {cart} =useCart()
    return (
        <div>
            <Sheet>
                <SheetTrigger>
                    <ShoppingCartIcon />
                </SheetTrigger>
                <SheetContent className="bg-dark-4 w-full overflow-scroll flex flex-col border-none">
                    <SheetHeader>
                        <SheetTitle className="text-white text-2xl">
                            Carrito
                        </SheetTitle>
                    </SheetHeader>
                    <SheetDescription>
                        <ItemsCartContainer />
                    </SheetDescription>
                    {cart.length > 0?
                    <Link to="/checkout">
                        <SheetTrigger className="w-full">
                            <Button className="bg-primary-500 w-full hover:bg-primary-600">
                                Finalizar compra
                            </Button>
                        </SheetTrigger>
                    </Link>
                    :""}
                </SheetContent>
            </Sheet>
        </div>
    );
}

export default Cart;
