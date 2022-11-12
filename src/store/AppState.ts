import { combineReducers } from "redux";

import { authReducer } from "./reducers/auth.reducer";
import { productReducer } from "./reducers/product.reducer";
import { cartReducer } from "./reducers/cart.reducer";

export const rootReducer = combineReducers({
    auth: authReducer,
    product: productReducer,
    cart: cartReducer
});

export type AppState = ReturnType<typeof rootReducer>;