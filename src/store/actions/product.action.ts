import { Dispatch } from "redux";
import Product from "../../models/data/Product";

import * as productService from '../../services/product.service';

interface LoadAllAction {
    type: 'PRODUCT_LOAD_ALL';
    products: Array<Product>;
}

export type ProductAction = LoadAllAction;

export const loadAll = () =>
    async (dispatch: Dispatch<ProductAction>) => {
        try {
            const products = await productService.getAllAsync();

            dispatch({ type: 'PRODUCT_LOAD_ALL', products });
        } catch (error) {
        }
    };