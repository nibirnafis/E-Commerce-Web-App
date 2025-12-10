// CSR
"use client"
import Product from '@/components/Product';
import { TProduct } from '@/types/Types';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';


const Page = () => {

    const params = useParams()

    const [ products, setProducts ] = useState([])

    useEffect(()=>{
        const loadData = async() => {
            const res = await fetch(`https://e-commerce-web-app-five-nu.vercel.app/api/products/category/${params.category}`, {
                // cache: "no-store",
            })
            const data =  await res.json()

            setProducts(data.res)
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



// SSR

/* import Product from '@/components/Product';
import { TProduct } from '@/types/Types';


const Page = async({ params }: { params: Promise<{ category: string }>}) => {

    const {category} = await params

    const loadData = async() => {
        const res = await fetch(`http://localhost:3000/api/products/category/${category}`, {
            cache: "no-store",
        })
        const data =  await res.json()

        return data.res
    }

    const products = await loadData()



    if (!products || products.length === 0) {
        return <p className='text-center'>No products found in the {category} category.</p>; 
    }


    return (
        <>
        <p className='text-center font-ironManOfWar text-lrg pb-4'>{category}</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 mx-auto max-w-[1440px] px-8 pb-24">
            {
                products.map((product: TProduct, key: number) => <Product product={product} key={key}></Product>)
            }
        </div>
        </>
    );
};

export default Page; */