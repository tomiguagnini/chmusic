import { Song } from "@/types";
import { createContext, useState, ReactNode } from "react";

type CartContextType = {
    cart: Song[]; // Reemplaza "any" con el tipo adecuado para los elementos en tu carrito
    addToCart: (song: Song) => void; // Reemplaza "any" con el tipo adecuado para tu canción
    clearCart: () => void;
    cartContain: (song:Song) => boolean;
    removeToCart: (song:Song) => void;
    getTotal: () => number;
  };

export const CartContext = createContext<CartContextType| undefined>(undefined);

type CartProviderProps = {
    children: ReactNode;
  };

export function CartProvider({ children }:CartProviderProps) {
    const [cart, setCart] = useState<Song[]>([]);

    const addToCart = (song:Song) => {
        if (!cartContain(song)){
            setCart(prevState => ([...prevState,song]))
        }
    };
    const removeToCart = (song:Song)=>{
        if (cartContain(song)){
            setCart(prevState => prevState.filter((s)=> s.ID !== song.ID))
        }
    }
    const cartContain = (song:Song) =>{
        return cart.findIndex((s)=> s.ID === song.ID) >= 0
    }
    const clearCart = () => {
        setCart([]);
    };
    const getTotal = ()=>{
        return cart.reduce((ac:number,s:Song)=> ac + Number(s.Price) , 0 )
    }
    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                clearCart,
                cartContain,
                removeToCart,
                getTotal
            }}
        >
            {children}
        </CartContext.Provider>
    );
}
