import User from '../models/data/User';
import Product from '../models/data/Product';
import Order from '../models/data/Order';

class Database {
    users: Array<User>;
    products: Array<Product>;
    orders: Array<Order>;

    constructor() {
        this.users = [
            { id: 1, username: "customer_1", password: "customer", role: "customer" },
            { id: 2, username: "customer_2", password: "customer", role: "customer" },
            { id: 3, username: "admin", password: "admin", role: "admin" }
        ];
        this.products = [
            { id: 1, sku: "P001", name: "Product 1", description: "Product Description", price: 1.01 },
            { id: 2, sku: "P002", name: "Product 2", description: "Product Description", price: 2.01 },
            { id: 3, sku: "P003", name: "Product 3", description: "Product Description", price: 3.01 },
            { id: 4, sku: "P004", name: "Product 4", description: "Product Description", price: 4.01 },
            { id: 5, sku: "P005", name: "Product 5", description: "Product Description", price: 5.01 },
            { id: 6, sku: "P006", name: "Product 6", description: "Product Description", price: 6.01 },
            { id: 7, sku: "P007", name: "Product 7", description: "Product Description", price: 7.01 },
            { id: 8, sku: "P008", name: "Product 8", description: "Product Description", price: 8.01 },
            { id: 9, sku: "P009", name: "Product 9", description: "Product Description", price: 9.01 },
            { id: 10, sku: "P0010", name: "Product 10", description: "Product Description", price: 10.01 },
            { id: 11, sku: "P0011", name: "Product 11", description: "Product Description", price: 11.01 },
            { id: 12, sku: "P0012", name: "Product 12", description: "Product Description", price: 12.01 },
            { id: 13, sku: "P0013", name: "Product 13", description: "Product Description", price: 13.01 },
            { id: 14, sku: "P0014", name: "Product 14", description: "Product Description", price: 14.01 },
            { id: 15, sku: "P0015", name: "Product 15", description: "Product Description", price: 15.01 },
            { id: 16, sku: "P0016", name: "Product 16", description: "Product Description", price: 16.01 }
        ];
        this.orders = [];
    };
}

export default new Database();