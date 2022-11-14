import { OrderAction } from "../actions/order.action";
import Order from "../../models/data/Order";

interface OrderState {
    orders: Array<Order>;
}

const initialState: OrderState = { orders: [] };

export const orderReducer = (state: OrderState = initialState, action: OrderAction): OrderState => {
    switch (action.type) {
        case 'ORDERS_LOAD_ALL':
            return { orders: action.orders }
        default: return state;
    }
};