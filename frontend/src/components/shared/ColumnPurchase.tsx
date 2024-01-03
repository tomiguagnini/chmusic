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
      id: "TotalPrice",
      header: "Precio",
      cell: ({ row }) => {
          const Purchase = row.original;
          return `$ ${Purchase.TotalPrice}`;
      },
    },
    {
      id: "beat",
      header: "Beat",
      cell: ({ row }) => {
          const Purchase = row.original;
          return Purchase.Songs.map((e) => e.Title).join(", ");
      },
    },
];
