import db from '../database/db';
import CartItem from "../models/data/CartItem";
import Customer from "../models/data/Customer";
import Order from '../models/data/Order';

export const getAllAsync = async (): Promise<Order[]> =>
    await new Promise((resolve, reject) =>
        setTimeout(() => {
            resolve(db.orders);
        }, 2000)
    );

export const checkout = async (customer: Customer, carts: Array<CartItem>): Promise<number> =>
    await new Promise((resolve) =>
        setTimeout(() => {
            const id = db.orders.length + 1;
            db.orders.push({ id, customer, items: carts });
            resolve(id);
        }, 2000)
    );