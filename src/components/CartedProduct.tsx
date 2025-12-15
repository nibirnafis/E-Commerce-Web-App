import { decreaseQuantity, increaseQuantity } from "@/lib/redux/features/cartSlice";
import { useAppDispatch } from "@/lib/redux/hooks";
import { TCartedProduct } from "@/types/Types";
import Image from "next/image";



const CartedProduct = ({product}: {product: TCartedProduct}) => {


    const dispatch = useAppDispatch()


    const handleIncrease = () => {
        dispatch(increaseQuantity(product))
    }
    
    const handleDecrease = () => {
        dispatch(decreaseQuantity(product))
    }


    return (
        <div className="bg-blue flex justify-between items-center gap-4 p-2 md:p-4 rounded-2xl">
            <Image 
                className="rounded-full max-w-8 max-h-8 md:max-w-16 md:max-h-16"
                src={product.img_url}
                alt="Cover Picture 1"
                width={64}
                height={64}
            >
            </Image>
            <p>{(product.title).toUpperCase()}</p>
            <div className="flex items-center gap-1">
                <button onClick={handleDecrease} className="bg-black p-1 rounded-full text-orange">-</button>
                <p>{product.cartedQuantity}</p>
                <button onClick={handleIncrease} className="bg-black p-1 rounded-full text-orange">+</button>
            </div>
            <p >{product.cartedQuantity * product.price}tk.</p>
        </div>
    );
};

export default CartedProduct;