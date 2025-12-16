import { TProduct } from '@/types/Types';
import Image from 'next/image';
import Link from 'next/link';
// import CartButton from './CartButton';



const Product = (prop: {product: TProduct}) => {

    const { id, title, img_url, price } = prop.product

    return (
        <>
        <div className='flex flex-col m-auto w-full h-full tracking-normal relative'>
            <Link href={`${process.env.NEXT_PUBLIC_BASE_API_URL}/products/${id}`}>
                <div className='flex flex-col-reverse bg-blue w-full h-[287px] rounded-2xl'>
                    <div className='flex flex-col justify-between items-center pb-4 px-4'>
                        <p className='font-inter text-cyan text-sml pb-1'>{title}</p>
                        <p className='font-inter text-orange text-sml'>{price} tk.</p>
                    </div>
                </div>
            </Link>
            <div className='overflow-clip w-full h-[223px] rounded-2xl absolute'>
                <div className='absolute bottom-4 right-4'>
                    {/* <CartButton product={prop.product}></CartButton> */}
                </div>
                <Image
                    className="w-full h-full object-cover"
                    src={img_url}
                    alt="Cover Picture 1"
                    width={1024}
                    height={1024}>
                </Image>
            </div>
        </div>
        </>
    );
};

export default Product;