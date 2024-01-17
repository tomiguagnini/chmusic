import UserForm from "@/components/forms/UserForm";
import DialogLicence from "@/components/shared/DialogLicence";

import ItemsCartContainer from "@/components/shared/ItemsCartContainer";
import { useCart } from "@/hooks/useCart";

function Checkout() {
    const { getTotal } = useCart();
    return (
        <div className="common-container">
            <ItemsCartContainer />
            <div className="flex flex-col gap-3 justify-end w-full max-w-xl">
                <DialogLicence/>
                <p className="text-xl ">Total: ${getTotal()} </p>
            </div>
            <UserForm />
            
        </div>
    );
}

export default Checkout;
