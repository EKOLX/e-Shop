import db from '../database/db.json';
import Product from '../models/Product';

export const getAllAsync = async (): Promise<Product[]> =>
    await new Promise((resolve, reject) =>
        setTimeout(() => {
            resolve(db.products);
        }, 2000)
    );