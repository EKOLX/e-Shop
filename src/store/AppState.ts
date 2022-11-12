import { combineReducers } from "redux";

import { authReducer } from "./reducers/auth.reducer";
import { productReducer } from "./reducers/product.reducer";

export const rootReducer = combineReducers({
    auth: authReducer,
    product: productReducer
});

export type AppState = ReturnType<typeof rootReducer>;