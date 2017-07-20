import { ICustomer } from "./ICustomer";

export abstract class CustomerBase implements ICustomer {
    name = "Customer Base";
    numberOfYearsCustomer = 0;
    discountPercent() {
        return .01 * this.numberOfYearsCustomer;
    }
}


