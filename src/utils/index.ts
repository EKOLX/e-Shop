import CartItem from "../models/data/CartItem";

export const sumCartTotalQuantity = (cartItems: Array<CartItem>) => {
    return cartItems.reduce((acc, curr) => acc + curr.quantity, 0);
};

export const sumCartTotalPrice = (cartItems: Array<CartItem>) => {
    return cartItems.reduce((acc, curr) => acc + (curr.product.price * curr.quantity), 0);
};

export const deepClone = <T>(arg: T) => JSON.parse(JSON.stringify(arg)) as T;