import Link from 'next/link';
import React from 'react';

const Category = ({category}: {category:string}) => {

    const upperCassed = category.toLocaleUpperCase()

    return (
        <>
        <div className='text-exsml font-inter'>
            <Link href={`http://localhost:3000/products/category/${category}`}>{upperCassed}</Link>
        </div>
        </>
    );
};

export default Category;