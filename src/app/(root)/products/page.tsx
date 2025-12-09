import Product from '@/components/Product';
import Title from '@/components/Title';
import { TProduct } from '@/types/Types';



const loadData = async () => {
    const res = await fetch("http://localhost:3000/api/products/allproducts", {
        cache: "no-store",
    })
    return res.json()
}

const page = async() => {
    
    const { res } = await loadData()

    return (
        <>
        <Title t1="ALL PRODUCTS" t2="SEE ALL THE PRODUCTS COLLECTION" ></Title>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 mx-auto max-w-[1440px] px-8 pb-24">
            {
                res.length ?
                res.map((product: TProduct, key: number) => <Product product={product} key={key}></Product>)
                :
                <p>Loading..</p>
            }
        </div>
        </>
    );
};

export default page;