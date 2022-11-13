import Product from "../../models/data/Product";

interface AddAction {
    type: 'ADD_TO_CART';
    product: Product;
}

export type CartAction = AddAction;

export const add = (product: Product): CartAction => ({ type: 'ADD_TO_CART', product });