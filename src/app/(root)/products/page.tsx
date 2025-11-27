"use client"

import Categories from '@/components/Categories';
import Product from '@/components/Product';
import { TProduct } from '@/types/Types';
import React, { useEffect, useState } from 'react';

const Products = () => {

    const [ products, setProducts] = useState([])

    useEffect(()=>{
        const loadData = async () => {
            const res = await fetch("/data.json")
            const data = await res.json()
            setProducts(data)
        }

        loadData()
    }, [])

    return (
        <>
        {/* <Categories></Categories> */}
        <div className='section-text'>
                <h1>ALL PRODUCTS</h1>
                <h6>SEE ALL THE PRODUCTS COLLECTION</h6>
            </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 mx-auto gap-8 max-w-[1440px] px-8 pb-24">
            {
                products.length ?
                products.map((product: TProduct, key: number) => <Product product={product} key={key}></Product>)
                :
                <p>Loading..</p>
            }
        </div>
        </>
    );
};

export default Products;