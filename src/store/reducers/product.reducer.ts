import { ProductAction } from "../actions/product.action";
import Product from "../../models/data/Product";

interface ProductState {
    products: Array<Product>;
}

const initialState: ProductState = { products: [] };

export const productReducer = (state: ProductState = initialState, action: ProductAction): ProductState => {
    switch (action.type) {
        case 'PRODUCT_LOAD_ALL':
            return {
                products: action.products
            }
        default: return state;
    }
};