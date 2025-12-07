"use client"
import Product from '@/components/Product';
import Title from '@/components/Title';
import { TProduct } from '@/types/Types';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';


const Page = () => {

    const params = useParams() 

    const [ products, setProducts ] = useState([])

    useEffect(()=>{
        const loadData = async() => {
            const res = await fetch(`http://localhost:3000/api/products/category/${params.category}`, {
                cache: "no-store",
            })
            const data =  await res.json()

            setProducts(data) 
        }

        loadData()
    }, [params.category])


    if (!products.length) {
        return <p className='text-center'>Loading...</p>;
    }


    return (
        <>
        <p className='text-center font-ironManOfWar text-lrg pb-4'>{params.category}</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 mx-auto max-w-[1440px] px-8 pb-24">
            {
                products.map((product: TProduct, key: number) => <Product product={product} key={key}></Product>)
            }
        </div>
        </>
    );
};

export default Page;