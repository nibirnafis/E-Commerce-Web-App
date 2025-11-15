import Link from 'next/link';
import React from 'react';

const Routes = () => {
    return (
        <div className='flex gap-2'>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/products">Products</Link>
            <Link href="/contact">Contact</Link>
        </div>
    );
};

export default Routes;