import { useEffect, useState } from "react";
import { Purchase } from "../../types";
import { getPurchases } from "../../services";
import { DataTable } from "@/components/shared/DataTable";
import { columnsPurchase } from "./ColumnPurchase";

function Payments() {
    const [purchases, setPurchases] = useState<Array<Purchase>>([]);
    useEffect(() => {
        getPurchases()
        .then((r) => setPurchases(r.data))
        .catch((error)=> console.log(error))
    }, []);
  return (
    <DataTable columns={columnsPurchase} data={purchases}/>
  )
}

export default Payments