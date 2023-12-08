import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Song } from "@/types";
import { deleteSong } from "@/services";

export const columnsSong: ColumnDef<Song>[] = [
    {
        accessorKey: "Title",
        header: "Titulo",
    },
    {
        accessorKey: "Artist",
        header: "Artista",
    },
    {
        accessorKey: "Price",
        header: "Precio",
    },
    {
        accessorKey: "Genre",
        header: "Genero",
    },
    {
        header: "Actions",
        id: "actions",
        cell: ({ row }) => {
            const song = row.original;

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem
                            onClick={() => {
                                if (window.confirm("desea eliminar?")){
                                    deleteSong(song.ID)
                                    .then(console.log)
                                    .catch(console.log)
                                    window.location.reload()
                                }
                            }}
                        >
                            Eliminar
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        },
    },
];
