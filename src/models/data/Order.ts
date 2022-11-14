import Cart from "./Cart";
import Customer from "./Customer";

export default interface Order {
    id: number;
    customer: Customer;
    carts: Array<Cart>;
}