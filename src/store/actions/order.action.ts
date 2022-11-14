import { Dispatch } from "redux";

import * as cartService from '../../services/cart.service';
import Order from "../../models/data/Order";

interface LoadAllAction {
    type: 'ORDERS_LOAD_ALL';
    orders: Array<Order>;
}

export type OrderAction = LoadAllAction;

export const loadAll = () =>
    async (dispatch: Dispatch<OrderAction>) => {
        try {
            const orders = await cartService.getAllAsync();
            dispatch({ type: 'ORDERS_LOAD_ALL', orders });
        } catch (error) { }
    };