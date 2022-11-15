import db from '../database/db';
import Product from '../models/data/Product';

export const getAllAsync = async (): Promise<Product[]> =>
    await new Promise((resolve, reject) =>
        setTimeout(() => {
            resolve(db.products);
        }, 2000)
    );

export const updateAsync = async (product: Product) =>
    await new Promise((resolve) =>
        setTimeout(() => {
            let updatedProduct = db.products.find(prod => prod.id === product.id);
            if (updatedProduct) {
                updatedProduct.sku = product.sku;
                updatedProduct.name = product.name;
                updatedProduct.description = product.description;
                updatedProduct.price = product.price;
            }
            resolve('Done');
        }, 2000)
    );