import { useEffect, useState } from "react";
import { Purchase } from "../../types";
import { getPurchases } from "../../services";

const AllPurchases = () => {
    const [purchases, setPurchases] = useState<Array<Purchase>>([]);
    useEffect(() => {
        getPurchases()
        .then((r) => setPurchases(r.data))
        .catch((error)=> console.log(error))
    }, []);

    return (
        <div className="common-container">
            <h1 className=" text-3xl">AllPurchases</h1>

            <br></br>
            <ul>
                {purchases.map((p) => {
                    return (
                        <li key={p.ID}>{`${p.Songs[0].Title}, ${p.TotalPrice}, ${p.User?.Email}`}</li>
                    );
                })}
            </ul>
        </div>
    );
};

export default AllPurchases;