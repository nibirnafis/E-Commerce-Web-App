'use client'
import CartedProduct from '@/components/CartedProduct';
import { useAppSelector } from '@/lib/redux/hooks';
import { TCartedProduct } from '@/types/Types';

const Page = () => {

    const cart = useAppSelector(state => state.cart.items)
    const totalAmount = useAppSelector(state => state.cart.totalAmount)

    return (
        <div>
            <div className='section-text'>
                <h1>YOUR CART</h1>
                <h6>YOUR PRODUCTS TO PURCHASE</h6>
            </div>
            {
                cart.length === 0 ?
                <p className='text-center'>YOUR CART IS EMPTY</p>
                :
                <div className="flex flex-col gap-4 mx-auto max-w-[1440px] px-8 pb-24">
                    {
                        cart.map((product: TCartedProduct, key: number) => <CartedProduct product={product} key={key}></CartedProduct>)
                    }
                    <div className='flex justify-end gap-4'>
                        <p className='col-start-1 col-end-2'> Total:</p>
                        <p className='col-start-4'>{totalAmount}tk.</p>
                    </div>
                </div>
            }
            
        </div>
    );
};

export default Page;