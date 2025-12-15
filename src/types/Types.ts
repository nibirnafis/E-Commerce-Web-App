export interface TProduct {
    id: number,
    category: string,
    title: string,
    details: string,
    img_url: string,
    price: number,
    color: string,
    available: boolean,
    quantity: number
}


export interface TCartedProduct extends TProduct {
    carted: boolean,
    cartedQuantity: number
}