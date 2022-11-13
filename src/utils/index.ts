import Cart from "../models/data/Cart";

export const sumQuantitiesOfCart = (carts: Array<Cart>) => {
    return carts.reduce((acc, curr) => acc + curr.quantity, 0);
};

export const sumPricesOfCart = (carts: Array<Cart>) => {
    return carts.reduce((acc, curr) => acc + curr.product.price, 0);
};