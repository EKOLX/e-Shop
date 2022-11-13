import db from '../database/db.json';
import Cart from '../models/data/Cart';
import Customer from '../models/data/Customer';
import Product from '../models/data/Product';

export const getAllAsync = async (): Promise<Product[]> =>
    await new Promise((resolve, reject) =>
        setTimeout(() => {
            resolve(db.products);
        }, 2000)
    );

export const checkout = async (customer: Customer, productsInCart: Array<Cart>) =>
    await new Promise((resolve) =>
        setTimeout(() => { resolve('Saved to db.'); }, 2000)
    );