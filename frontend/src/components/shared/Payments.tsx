import { useEffect, useState } from "react";
import { Purchase, columnsP } from "../../types";
import { getPurchases } from "../../services";
import { DataTable } from "@/components/shared/DataTable";

function Payments() {
    const [purchases, setPurchases] = useState<Array<Purchase>>([]);
    useEffect(() => {
        getPurchases()
        .then((r) => setPurchases(r.data))
        .catch((error)=> console.log(error))
    }, []);
  return (
    <DataTable columns={columnsP} data={purchases}/>
  )
}

export default Payments