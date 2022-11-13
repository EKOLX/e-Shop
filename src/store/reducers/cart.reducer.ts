import { CartAction } from "../actions/cart.action";
import Cart from "../../models/data/Cart";

interface CartState {
    carts: Array<Cart>;
}

const initialState: CartState = { carts: [] };

export const cartReducer = (state: CartState = initialState, action: CartAction): CartState => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const carts: Array<Cart> = JSON.parse(JSON.stringify(state.carts));

            const productInCart = carts.find(cart => cart.product.id === action.product.id);
            if (productInCart) {
                productInCart.quantity += 1;
            } else {
                carts.push({ product: action.product, quantity: 1 });
            }

            return { carts }
        case 'CLEAR_CART':
            return { carts: [] }
        default: return state;
    }
};