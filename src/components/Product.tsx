import { TProduct } from '@/types/Types';
import Image from 'next/image';
import React from 'react';


const Product = (prop: {product: TProduct}) => {

    const { title, img_url, price } = prop.product

    return (
        <>
        <div className='flex flex-col m-auto w-full h-full relative'>
            <div className='flex flex-col-reverse bg-blue w-full h-[287px] rounded-4xl'>
                <div className='pb-4'>
                    <p className='text-center font-inter text-cyan text-sml'>{title}</p>
                    <p className='text-center font-inter text-orange text-sml'>{price} Tk.</p>
                </div>
            </div>
            <div className='overflow-clip w-full h-[223px] rounded-4xl absolute'>
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