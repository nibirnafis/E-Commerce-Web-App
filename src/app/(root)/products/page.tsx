import Product from '@/components/Product';
import { TProduct } from '@/types/Types';
import React from 'react';

const page = async() => {
    const res = await fetch("http://localhost:3000/data.json")
    const data = await res.json()

    return (
        <>
        <p>products</p>
        <div className="grid grid-cols-5 gap-8">
            {
                data.map((product: TProduct, key: number) => <Product product={product} key={key}></Product>)
            }
        </div>
        </>
    );
};

export default page;