import React from 'react';
import Category from './Category';

const Categories = () => {

    const categories = [ "T-shirt", "Shirt", "Jeans", "Hoodie", "Jacket", "Dress", "Sweater", "Shorts", "Skirt" ]

    return (
        <div className='bg-black text-cyan'>
            <ul className='flex justify-between mx-auto max-w-[1440px] py-2'>
            {
                categories.map((category: string, key) => <Category category={category} key={key}></Category>)
            }
            </ul>
        </div>
    );
};

export default Categories; 