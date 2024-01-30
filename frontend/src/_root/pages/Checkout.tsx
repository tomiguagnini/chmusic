import UserForm from "@/components/forms/UserForm";
import CheckboxTermsAndConditions from "@/components/shared/CheckboxTermsAndConditions";
import DialogLicence from "@/components/shared/DialogLicence";
import ItemsCartContainer from "@/components/shared/ItemsCartContainer";
import { useCart } from "@/hooks/useCart";
import { useState } from "react";

function Checkout() {
    const { getTotal } = useCart();
    const [terms, setTerms] = useState(false);

    return (
        <div className="common-container">
            <ItemsCartContainer />
            <div className="flex flex-col gap-3 justify-end w-full max-w-xl">
                <p className="text-xl text-end">Total: ${getTotal()} </p>
                <DialogLicence />
                <CheckboxTermsAndConditions terms={terms} setTerms={setTerms} />
            </div>
            <UserForm terms={terms} />
        </div>
    );
}

export default Checkout;
