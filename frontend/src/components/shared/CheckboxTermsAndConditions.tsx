
import { Checkbox } from "../ui/checkbox";

type checkboxTyCProps = {
    terms:boolean,
    setTerms:(value:boolean)=> void,
}

function CheckboxTermsAndConditions({terms, setTerms}:checkboxTyCProps) {
    
    const onChangeTerms = () => {
        setTerms(!terms);
    };
    return (
        <div className="flex gap-3 py-4 items-baseline">
            <Checkbox checked={terms} onCheckedChange={onChangeTerms} />
            <p>He leido y acepto los terminos y condiciones </p><span className="text-red">*</span>
        </div>
    );
}

export default CheckboxTermsAndConditions;
