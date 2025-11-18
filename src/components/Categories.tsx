import React from 'react';
import Category from './Category';

const Categories = () => {

    const categories = [ "T-shirt", "Shirt", "Jeans", "hoodie", "jacket", "dress", "sweater", "shorts", "skirt" ]

    return (
        <div>
            <ul className='flex justify-around'>
            {
                categories.map((category: string, key) => <Category category={category} key={key}></Category>)
            }
            </ul>
        </div>
    );
};

export default Categories;