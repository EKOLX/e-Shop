import CartItem from "./CartItem";
import Customer from "./Customer";

export default interface Order {
    id: number;
    date: string;
    customer: Customer;
    items: Array<CartItem>;
}