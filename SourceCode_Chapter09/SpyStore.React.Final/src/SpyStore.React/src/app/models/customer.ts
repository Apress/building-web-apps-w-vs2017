/**
 * Created by kvgros on 1/21/2017.
 */
import { BaseModel } from "./baseModel";
import { Order } from "./order";

export class Customer extends BaseModel {
    fullName: string;
    emailAddress: string;
    password: string;
    orders: Order[];

}

