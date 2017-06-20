import { IProduct } from "./IProduct";
import { ICustomer } from "./ICustomer";

export class Product implements IProduct {

    name = "";
    private basePrice = 0.0;

    constructor(nameValue: string, basePriceValue: number) {
        this.name = nameValue;
        this.basePrice = basePriceValue;
    }

    currentPrice(customer: ICustomer) {
        let discount = this.basePrice * customer.discountPercent();
        return this.basePrice - discount;
    }
}


