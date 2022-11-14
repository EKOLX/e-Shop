import { combineReducers } from "redux";

import { authReducer } from "./reducers/auth.reducer";
import { productReducer } from "./reducers/product.reducer";
import { cartReducer } from "./reducers/cart.reducer";
import { orderReducer } from "./reducers/order.reducer";

export const rootReducer = combineReducers({
    auth: authReducer,
    product: productReducer,
    cart: cartReducer,
    order: orderReducer
});

export type AppState = ReturnType<typeof rootReducer>;