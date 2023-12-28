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

type CardShopProps = {
    song: Song;
};

function CardShop({ song }: CardShopProps) {
    const { addToCart, removeToCart, cartContain } = useCart();
    const navigate = useNavigate()
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
                <CardFooter>
                    <Button
                        variant={"outline"}
                        className=" border-primary-500 w-32 mr-1"
                        onClick={()=>{
                            addToCart(song)
                            navigate('/checkout')
                        }}
                    >
                        Comprar
                    </Button>
                    {!cartContain(song) ? (
                        <Button
                            className="bg-primary-500 hover:scale-[1.05] hover:bg-primary-600 ml-auto"
                            onClick={() => addToCart(song)}
                        >
                            <ShoppingCart />
                        </Button>
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
