import { BaseModel } from "./baseModel";

export class Product extends BaseModel {
    Description: string;
    ModelName: string;
    IsFeatured: boolean;
    ModelNumber: string;
    ProductImage: string;
    ProductImageLarge: string;
    UnitCost: number;
    CurrentPrice: number;
    UnitsInStock: number;
    CategoryId: number;

}