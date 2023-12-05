import { Song } from "@/types";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { X } from "lucide-react";
import { useCart } from "@/hooks/useCart";

type itemCartProps = {
    song: Song;
};

function ItemCart({ song }: itemCartProps) {
    const { removeToCart } = useCart();
    return (
        <div>
            <Card className="text-white flex   my-4 p-0  bg-dark-3 border-dark-1 hover:bg-dark-4 duration-300">
                <CardContent className="m-0 p-0 w-28 h-28 mr-3">
                    <img
                        src={song.Image}
                        alt={song.Title}
                        className="h-full w-full object-cover rounded-lg "
                    />
                </CardContent>
                <CardHeader className="p-0 pt-2 mr-auto">
                    <CardTitle className="text-lg">{song.Title}</CardTitle>
                    <CardDescription className="text-xs">{song.Artist}</CardDescription>
                    <p>${song.Price}</p>
                </CardHeader>
                <Button className="m-0 p-0 h-7 mr-1 "
                onClick={() => removeToCart(song)}>
                    <X />
                </Button>
            </Card>
        </div>
    );
}

export default ItemCart;
