import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    //CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Song } from "@/types";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { useCart } from "@/hooks/useCart";
import { ShoppingCart, Trash2 } from "lucide-react";
import License from "./License";

type CardShopProps = {
    song: Song;
};

function CardShop({ song }: CardShopProps) {
    const { addToCart, removeToCart, cartContain } = useCart();
    const navigate = useNavigate();
    return (
        <>
            <Card className="text-white w-64 m-5 bg-dark-3 border-dark-1 hover:bg-dark-4 duration-300">
                <Link to={"/song/" + song.ID}>
                    <CardContent className="flex justify-center p-3 h-60">
                        <img
                            src={song.Image}
                            alt={song.Title}
                            className=" h-full rounded-xl object-cover"
                        />
                    </CardContent>
                    <CardHeader>
                        <CardTitle>{song.Title}</CardTitle>
                        <CardDescription>{song.Artist}</CardDescription>
                        <p>${song.Price}</p>
                    </CardHeader>
                </Link>
                <CardFooter className="flex justify-between">
                    <License
                        song={song}
                        onClick={() => {
                            addToCart(song);
                            navigate("/checkout");
                        }}
                    >
                        <Button
                            variant={"outline"}
                            className=" border-primary-500 w-32 mr-1"
                        >
                            Comprar
                        </Button>
                    </License>
                    {!cartContain(song) ? (
                        <License 
                            song={song}
                            onClick={() => addToCart(song)}>
                            <Button
                                className="bg-primary-500 hover:scale-[1.05] hover:bg-primary-600 ml-auto"
                            >
                                <ShoppingCart />
                            </Button>
                        </License>
                    ) : (
                        <Button
                            onClick={() => removeToCart(song)}
                            className="bg-red hover:scale-[1.05] hover:bg-red-600 ml-auto"
                        >
                            <Trash2 />
                        </Button>
                    )}
                </CardFooter>
            </Card>
        </>
    );
}

export default CardShop;
