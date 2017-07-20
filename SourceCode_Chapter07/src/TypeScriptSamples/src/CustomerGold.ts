import { CustomerBase } from "./CustomerBase";

export class CustomerGold extends CustomerBase {
    name = "Gold Customer";
    numberOfYearsCustomer = 15;
    discountPercent() {
        return .20;
    }
}
