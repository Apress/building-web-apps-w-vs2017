/**
 * Created by kvgros on 1/21/2017.
 */
import { BaseModel } from "./baseModel";
import { Product } from "./product";

export class OrderDetail extends BaseModel {
    orderId: number;
    productId: number;
    quantity: number;
    unitCost: number;
    lineItemTotal: number;
    product: Product;
}