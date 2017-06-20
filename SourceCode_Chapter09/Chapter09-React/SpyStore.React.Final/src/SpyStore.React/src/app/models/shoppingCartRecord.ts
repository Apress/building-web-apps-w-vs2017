/**
 * Created by kvgros on 1/21/2017.
 */
import { BaseModel } from "./baseModel";
import { Customer } from "./customer";
import { OrderDetail } from "./orderDetail";
import { Product } from "./product";

export class ShoppingCartRecord extends Product {
    DateCreated: Date;
    CustomerId: number;
    Quantity: number;
    LineItemTotal: number;
    ProductId: number;
    OriginalQuantity: number;
}
