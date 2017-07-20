import * as $ from "jquery";
import { BaseService } from "./baseService";
import { Product } from "../models/product";
import { Category } from "../models/category";

export class ProductService extends BaseService{


    getProducts(): JQueryPromise<Product[]> {
        return $.getJSON(this.getRootUrl() + "/product");
    }

    getFeaturedProducts(): JQueryPromise<Product[]> {
        return $.getJSON(this.getRootUrl() + "/product/featured");
    }

    getProduct(id: number | string): JQueryPromise<Product> {
        return $.getJSON(this.getRootUrl() + "/product/" + id);
    }

    getProductsForACategory(id: number | string): JQueryPromise<Product[]> {
        return $.getJSON(this.getRootUrl() + "/category/" + id + "/products");
    }

    getCategories(): JQueryPromise<Category[]> {
        return $.getJSON(this.getRootUrl() + "/category");
    }

    getCategory(id: number | string): JQueryPromise<Category> {
        return $.getJSON(this.getRootUrl() + "/category/" + id);

    }

    searchProducts(searchText: string): JQueryPromise<Product[]> {
        return $.getJSON(this.getRootUrl() + "/search/" + encodeURIComponent(searchText));
    }
}
