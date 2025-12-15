import Product from '@/components/Product';
import Title from '@/components/Title';
import { TProduct } from '@/types/Types';
import { Suspense } from 'react';




const loadData = async () => {
    "use cache"

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/products`, /* {
        cache: "no-store",
    } */)
    const data = await res.json()
    const products = data.res

    return products
}



const page = async() => {
    const products = await loadData()

    if(!products){
        return <p className='text-center'>No products found</p>; 
    }

    return (
        <>
        <Title t1="ALL PRODUCTS" t2="SEE ALL THE PRODUCTS COLLECTION" ></Title>
        <Suspense>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-8 mx-auto max-w-[1440px] px-8 pb-24">
            {
                products.length ?
                products.map((product: TProduct, key: number) => <Product product={product} key={key}></Product>)
                :
                <p>Loading..</p>
            }
        </div>
        </Suspense>
        </>
    );
};

export default page;