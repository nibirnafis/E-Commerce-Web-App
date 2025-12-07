"use client"
import { TProduct } from '@/types/Types';
import { ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';



const Product = (prop: {product: TProduct}) => {

    const { id, title, img_url, price } = prop.product

    const [ isCarted, setIsCarted ] = useState(false)

    const handleIsCarted = () => {
        setIsCarted(!isCarted)
        console.log("carted", id)
    }

    return (
        <>
        <div className='flex flex-col m-auto w-full h-full relative'>
            <Link href={`/products/${id}`}>
                <div className='flex flex-col-reverse bg-blue w-full h-[287px] rounded-2xl'>
                    <div className='flex flex-col justify-between items-center pb-4 px-4'>
                        <p className='font-inter text-cyan text-sml pb-1'>{title}</p>
                        <p className='font-inter text-orange text-sml'>{price} tk.</p>
                    </div>
                </div>
            </Link>
            <div className='overflow-clip w-full h-[223px] rounded-2xl absolute'>
                <button onClick={handleIsCarted} className={ !isCarted ? 'absolute bg-blue bottom-4 right-4 rounded-full' : 'absolute bg-orange bottom-4 right-4 rounded-full'}>
                    <ShoppingCart className={ !isCarted ? 'scale-75' : 'scale-75 text-black' }/>
                </button>
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