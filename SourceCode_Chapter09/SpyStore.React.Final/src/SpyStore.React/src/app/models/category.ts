/**
 * Created by kvgros on 1/21/2017.
 */
import { BaseModel } from "./baseModel";
import { Product } from "./product";

export class Category extends BaseModel {
    CategoryName: string;
    Products: Product[];
}
