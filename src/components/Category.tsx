import Link from 'next/link';
import React from 'react';

const Category = ({category}: {category:string}) => {

    const upperCassed = category.toLocaleUpperCase()

    return (
        <>
        <Link className='text-exsml font-inter text-center py-1 rounded-l bg-blue text-cyan' href={`/products/category/${category}`}>{upperCassed}</Link>
        </>
    );
};

export default Category;