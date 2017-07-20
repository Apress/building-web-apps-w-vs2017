import { ICustomer } from "./ICustomer";

export interface IProduct {
    name: string;
    currentPrice(customer: ICustomer);
}
