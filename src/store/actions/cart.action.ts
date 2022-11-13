import { Dispatch } from "redux";

import * as productService from '../../services/product.service';
import Product from "../../models/data/Product";
import Customer from "../../models/data/Customer";
import { AppState } from "../AppState";

interface AddAction {
    type: 'ADD_TO_CART';
    product: Product;
}

interface ClearAction {
    type: 'CLEAR_CART';
}

export type CartAction = AddAction | ClearAction;

export const add = (product: Product): CartAction => ({ type: 'ADD_TO_CART', product });

export const checkout = (customer: Customer) =>
    async (dispatch: Dispatch<CartAction>, getState: () => AppState) => {
        try {
            const state = getState();
            await productService.checkout(customer, state.cart.carts);

            dispatch({ type: 'CLEAR_CART' });
        } catch (error) { }
    };

export const clear = (): CartAction => ({ type: 'CLEAR_CART' });