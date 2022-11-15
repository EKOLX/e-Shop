import { Dispatch } from "redux";
import Product from "../../models/data/Product";

import * as productService from '../../services/product.service';

interface LoadAllAction {
    type: 'PRODUCT_LOAD_ALL';
    products: Array<Product>;
}

interface UpdateAction {
    type: 'PRODUCT_UPDATE';
    product: Product;
}

export type ProductAction = LoadAllAction | UpdateAction;

export const loadAll = () =>
    async (dispatch: Dispatch<ProductAction>) => {
        try {
            const products = await productService.getAllAsync();
            dispatch({ type: 'PRODUCT_LOAD_ALL', products });
        } catch (error) { }
    };

export const update = (product: Product) =>
    async (dispatch: Dispatch<ProductAction>) => {
        try {
            await productService.updateAsync(product);
            dispatch({ type: 'PRODUCT_UPDATE', product });
        } catch (error) { }
    };