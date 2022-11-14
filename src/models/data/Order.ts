import CartItem from "./CartItem";
import Customer from "./Customer";

export default interface Order {
    id: number;
    customer: Customer;
    items: Array<CartItem>;
}