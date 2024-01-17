import { useCart } from "@/hooks/useCart";
import ItemCart from "./ItemCart";

function ItemsCartContainer() {
    const { cart } = useCart();
    return (
        <div className="w-full max-w-xl">
            {cart.map((s) => {
                return <ItemCart song={s} key={s.ID} />;
            })}
        </div>
    );
}

export default ItemsCartContainer;
