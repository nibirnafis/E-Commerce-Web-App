import { TProduct } from "@/types/Types";
import Product from "./Product";

const ProductsList = async () => {

    const res = await fetch("http://localhost:3000/data.json")
    const data = await res.json()

    return (
        <>
        <p>products</p>
        <div className="grid grid-cols-5">
            {
                // data.map((product: TProduct, key: number) => <Product product={product} key={key}></Product>)
            }
        </div>
        </>
    );
};

export default ProductsList;