import Link from 'next/link';
import React from 'react';

const Category = ({category}: {category:string}) => {
    return (
        <>
        <div className=''>
            <Link href={`/products/${category}`}>{category}</Link>
        </div>
        </>
    );
};

export default Category;