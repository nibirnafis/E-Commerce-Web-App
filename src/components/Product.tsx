import { TProduct } from '@/types/Types';
import React from 'react';


const Product = (prop: {product: TProduct}) => {

    const { category, title, details, price, color, available } = prop.product

    return (
        <div>
            <p>category: {category}</p>
            <p>title: {title}</p>
            <p>details: {details}</p>
            <p>price: {price} Tk.</p>
            <p>color: {color}</p>
            <p>stock: {available ? "Available" : "Not Available"}</p>
        </div>
    );
};

export default Product;