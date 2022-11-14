import { Dispatch } from "redux";

import { AppState } from "../AppState";
import * as cartService from '../../services/cart.service';
import Product from "../../models/data/Product";
import Customer from "../../models/data/Customer";

interface AddAction {
    type: 'ADD_TO_CART';
    product: Product;
}

interface ClearAction {
    type: 'CLEAR_CART';
}

export type CartAction = AddAction | ClearAction;

export const addToCart = (product: Product): CartAction => ({ type: 'ADD_TO_CART', product });

export const checkout = (customer: Customer) =>
    async (dispatch: Dispatch<CartAction>, getState: () => AppState) => {
        try {
            const state = getState();
            await cartService.checkout(customer, state.cart.carts);
            dispatch({ type: 'CLEAR_CART' });
        } catch (error) { }
    };

export const clear = (): CartAction => ({ type: 'CLEAR_CART' });