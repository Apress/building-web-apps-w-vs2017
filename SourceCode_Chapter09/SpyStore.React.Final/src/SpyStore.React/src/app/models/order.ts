/**
 * Created by kvgros on 1/21/2017.
 */
import { BaseModel } from "./baseModel";
import { Customer } from "./customer";
import { OrderDetail } from "./orderDetail";

export class Order extends BaseModel {
    customerId: number;
    orderTotal: Date;
    orderDate: Date;
    shipDate: Date;
    customer: Customer;
    orderDetails: OrderDetail[];

}