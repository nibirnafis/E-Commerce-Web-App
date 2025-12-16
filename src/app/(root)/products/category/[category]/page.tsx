// CSR
/* "use client"
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
            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/products/category/${params.category}`, {
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
        <div className='section-text'>
            <h1>{params.category}</h1>
            <h6>{`SEE ALL THE COLLECTIONS`}</h6>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 mx-auto max-w-[1440px] px-8 pb-24">
            {
                products.map((product: TProduct, key: number) => <Product product={product} key={key}></Product>)
            }
        </div>
        </>
    );
};

export default Page; */






// SSR
import Product from '@/components/Product';
import { TProduct } from '@/types/Types';
import { Suspense } from 'react';


const Page = async({ params }: { params: Promise<{ category: string }>}) => {

    const {category} = await params

    const loadData = async() => {
        "use cache"

        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/products/category/${category}`, /* {
            cache: "no-store",
        } */)
        const data =  await res.json()

        return data.res
    }

    const products = await loadData()



    if (!products) {
        return <p className='text-center'>No products found in the {category} category.</p>; 
    }


    return (
        <>
        <p className='text-center font-ironManOfWar text-lrg my-16 md:my-24'>{category}</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-8 mx-auto max-w-[1440px] px-8 pb-24">
            {
                products.map((product: TProduct, key: number) => (
                    <Suspense fallback={<p>Loading</p>} key={key}>
                        <Product product={product} key={key}></Product>
                    </Suspense>
                ))
            }
        </div>
        </>
    );
};

export default Page;