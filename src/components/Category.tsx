import Link from 'next/link';
import React from 'react';

const Category = ({category}: {category:string}) => {

    const upperCassed = category.toLocaleUpperCase()

    return (
        <>
        <div className='text-exsml font-inter'>
            <Link href={`/products/category/${category}`}>{upperCassed}</Link>
        </div>
        </>
    );
};

export default Category;