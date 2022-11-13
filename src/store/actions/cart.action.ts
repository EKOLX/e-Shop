import { Dispatch } from "redux";

import * as productService from '../../services/product.service';
import Product from "../../models/data/Product";
import Customer from "../../models/data/Customer";
import { AppState } from "../AppState";

interface AddAction {
    type: 'ADD_TO_CART';
    product: Product;
}

interface CheckoutAction {
    type: 'CHECKOUT_CART';
}

export type CartAction = AddAction | CheckoutAction;

export const add = (product: Product): CartAction => ({ type: 'ADD_TO_CART', product });

export const checkout = (customer: Customer) =>
    async (dispatch: Dispatch<CartAction>, getState: () => AppState) => {
        try {
            const state = getState();
            await productService.checkout(customer, state.cart.carts);

            dispatch({ type: 'CHECKOUT_CART' });
        } catch (error) { }
    };