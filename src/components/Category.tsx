"use client"
import Link from 'next/link';
import { useParams } from 'next/navigation';

const Category = ({category}: {category:string}) => {

    const params = useParams()
    const upperCassed = category.toUpperCase()


    return (
        <>
        <Link className={
            params.category == category ? 
            'text-exsml font-inter text-center py-1 rounded bg-orange text-black'
            :
            'text-exsml font-inter text-center py-1 rounded bg-blue text-cyan'
        } href={`/products/category/${category}`}>{upperCassed}</Link>
        </>
    );
};

export default Category;