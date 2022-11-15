import { CartAction } from "../actions/cart.action";
import CartItem from "../../models/data/CartItem";
import { deepClone } from "../../utils";

interface CartState {
    items: Array<CartItem>;
}

const initialState: CartState = { items: [] };

export const cartReducer = (state: CartState = initialState, action: CartAction): CartState => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const items = deepClone(state.items);

            const cartItem = items.find(item => item.product.id === action.product.id);
            if (cartItem) {
                cartItem.quantity += 1;
            } else {
                items.push({ product: action.product, quantity: 1 });
            }

            return { items };
        case 'CLEAR_CART':
            return { items: [] }
        default: return state;
    }
};