import { Purchase } from "@/types";
import { ColumnDef } from "@tanstack/react-table";

export const columnsPurchase: ColumnDef<Purchase>[] = [
    {
      accessorKey: "User.Email",
      header: "Email",
    },
    {
      accessorKey: "State",
      header: "Estado",
    },
    {
      accessorKey: "TotalPrice",
      header: "Precio",
    },
    {
      accessorKey: "Songs[0].Title",
      header: "Beat",
    },
]