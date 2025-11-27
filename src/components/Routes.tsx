import Link from 'next/link';
import React from 'react';

const Routes = () => {
    return (
        <div className='flex gap-8 font-inter text-exsml tracking-[.1rem]'>
            <Link href="/">HOME</Link>
            <Link href="/products">PRODUCTS</Link>
            <Link href="/cart">CART</Link>
            <Link href="/about">ABOUT</Link>
            <Link href="/contact">CONTACT</Link>
        </div>
    );
};

export default Routes;