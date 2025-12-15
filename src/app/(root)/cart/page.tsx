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
                <div className="flex flex-col gap-4 md:gap-8 mx-auto max-w-[1440px] px-8 pb-8">
                    {
                        cart.map((product: TCartedProduct, key: number) => <CartedProduct product={product} key={key}></CartedProduct>)
                    }
                </div>
            }
            <div className='flex justify-end mx-auto max-w-[1440px] gap-4 px-12 pb-24'>
                {/* <p className='col-start-1 col-end-2'> Amount:</p> */}
                <p className='col-start-4'>{totalAmount}tk.</p>
            </div>
        </div>
    );
};

export default Page;