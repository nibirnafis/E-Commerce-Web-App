"use client"

import { addToCart, removeFromCart } from "@/lib/redux/features/cartSlice";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { TCartedProduct, TProduct } from "@/types/Types";
import { ShoppingCart } from "lucide-react";

const CartButton = ({product}: {product: TProduct}) => {

    const cart = useAppSelector(state => state.cart.items)
    const dispatch = useAppDispatch()
    
    
    const ifCarted = cart.find(p => p.id === product.id)


    const handleIsCarted = () => {

        if(!ifCarted){
            const cartedProduct = { ...product, carted: true, cartedQuantity: 1 }
            add(cartedProduct)
        }else{
            remove()
        }
    }
    

    function add(cartedProduct: TCartedProduct){
        dispatch(addToCart(cartedProduct))
    }
    
    function remove(){
        dispatch(removeFromCart(product))
    }


    return (
        <>
        {
        product.quantity > 0 ?
        <button onClick={handleIsCarted} className={ !ifCarted ? 'bg-blue rounded-full' : 'bg-orange rounded-full'}>
            <ShoppingCart className={ !ifCarted ? 'scale-75' : 'scale-75 text-black' }/>
        </button>
        :
        <button className={ !ifCarted ? 'bg-red-700 rounded-full:' : 'bg-red-700 rounded-full'}>
            <ShoppingCart className={ !ifCarted ? 'scale-75 text-black' : 'scale-75 text-black' }/>
        </button>
        }
        </>
    );
};

export default CartButton;