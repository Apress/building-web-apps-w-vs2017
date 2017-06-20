import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable, Observer } from 'rxjs/Rx';
import 'rxjs/Rx';
import 'rxjs/add/operator/map'

import { AppConfig, APP_CONFIG } from './app.config'
//export class Product {
//    constructor(public Id: number, public ModelName: string) { }
//}

@Injectable()
export class ProductService {
    constructor(private http: Http, @Inject(APP_CONFIG) private config: AppConfig) { }

    getProducts(): Observable<any> {
        return this.http.get(this.config.apiEndpoint + "product").map(response =>
            response.json());
    }
    
	getFeaturedProducts() : Observable<any> {
        return this.http.get(this.config.apiEndpoint + "product/featured").map(response =>
            response.json());
    }

    getSearchProducts(searchText: string): Observable<any> {
        return this.http.get(this.config.apiEndpoint + "search/" + encodeURIComponent(searchText)).map(response =>
            response.json());
    }

    getProduct(id: number | string) : Observable<any> {
        return this.http.get(this.config.apiEndpoint + "product/" + id).map(response =>
            response.json());
    }

    getProductsForACategory(id: number | string): Observable<any> {
        return this.http.get(this.config.apiEndpoint + "category/" + id + "/products").map(response =>
            response.json());
    }

    getCategories(): Observable<any> {
        return this.http.get(this.config.apiEndpoint + "category").map(response =>
            response.json());
    }
	
    getCategory(id: number | string): Observable<any> {
        return this.http.get(this.config.apiEndpoint + "category/" + id).map(response =>
            response.json());
    }

    searchProducts(searchText: string): Observable<any> {
        return this.http.get(this.config.apiEndpoint + "search/" + searchText).map(response =>
            response.json());
    }
}
