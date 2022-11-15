import { ProductAction } from "../actions/product.action";
import Product from "../../models/data/Product";
import { deepClone } from "../../utils";

interface ProductState {
    products: Array<Product>;
}

const initialState: ProductState = { products: [] };

export const productReducer = (state: ProductState = initialState, action: ProductAction): ProductState => {
    switch (action.type) {
        case 'PRODUCT_LOAD_ALL':
            return { products: action.products }
        case 'PRODUCT_UPDATE':
            const products = deepClone(state.products);
            for (let product of products) {
                if (product.id === action.product.id) {
                    product.sku = action.product.sku;
                    product.name = action.product.name;
                    product.description = action.product.description;
                    product.price = action.product.price;
                    break;
                }
            }

            return { products };
        default: return state;
    }
};