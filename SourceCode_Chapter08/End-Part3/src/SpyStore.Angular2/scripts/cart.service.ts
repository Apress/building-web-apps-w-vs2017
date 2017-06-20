import {Injectable, Inject} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {Observable, Observer} from 'rxjs/Rx';
import { UserService, User } from './user.service';
import { APP_CONFIG, AppConfig } from './app.config';
import 'rxjs/Rx';
import 'rxjs/add/operator/map'

export class Cart {
    private _cartRecords: any[] = [];

    constructor(cartRecords: any) {
        if (cartRecords) {
            this._cartRecords = cartRecords;
        } 
    }

    get CartRecords(): any[] {
        return this._cartRecords;
    }
    
    get CartTotal(): number {
        let total:number = 0;
        this._cartRecords.forEach(function (r) {
            total += r.LineItemTotal;
        });
        return total;
    }

    addToCart(cartRecord: any) {
        this._cartRecords.push(cartRecord);
    }
    
}

export interface ShoppingCartRecord {
    Id?: number;
    CustomerId?: number;
    ProductId: number;
    Quantity: number;
    TimeStamp?: any;
    CurrentPrice?: number;
    LineItemTotal?: number;
}


@Injectable()
export class CartService {
   
    constructor(private http: Http, private _userService: UserService, @Inject(APP_CONFIG) private config: AppConfig) { } 

    getCart(): Observable<Cart> {
        return this.http.get(this.config.apiEndpoint + "shoppingcart/" + this._userService.User.Id).map(response =>
            new Cart(response.json()));
    }
    
    addToCart(cartRecord: ShoppingCartRecord): Observable<Response> {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.config.apiEndpoint + "shoppingcart/" + this._userService.User.Id, JSON.stringify(cartRecord), { headers: headers });
    }
    updateCartRecord(cartRecord: ShoppingCartRecord): Observable<Response> {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.config.apiEndpoint + "shoppingcart/" +  this._userService.User.Id + "/" + cartRecord.Id, JSON.stringify(cartRecord), { headers: headers });
    }
    removeCartRecord(cartRecord: ShoppingCartRecord): Observable<Response> {
        return this.http.delete(this.config.apiEndpoint + "shoppingcart/" +  this._userService.User.Id + "/" + cartRecord.Id + "/" + encodeURIComponent('"' + cartRecord.TimeStamp + '"'));
    }
    buy(): Observable<Response> {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.config.apiEndpoint + "shoppingcart/" + this._userService.User.Id + "/buy", JSON.stringify({ Id: this._userService.User.Id }), { headers: headers });
    }
}
