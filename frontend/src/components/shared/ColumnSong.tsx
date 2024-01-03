import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
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
        cell: ({row})=>{
            const song = row.original
            return `$ ${song.Price}`
        }
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
                    <DropdownMenuContent align="end" className="bg-dark-1 text-white ">
                        <DropdownMenuItem 
                            onClick={() => {
                                if (window.confirm("Esta seguro que desea eliminar este beat?")){
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
