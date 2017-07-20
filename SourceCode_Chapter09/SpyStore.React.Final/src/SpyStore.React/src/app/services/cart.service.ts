import * as $ from "jquery";
import { BaseService } from "./baseService";
import { Cart } from "../models/cart";
import { ShoppingCartRecord } from "../models/shoppingCartRecord";

export class CartService extends BaseService{

    getCart(userId: number): JQueryPromise<ShoppingCartRecord[]> {
        return $.getJSON(this.getRootUrl() + "/shoppingcart/" + userId);
    }

    addToCart(userId: number, productId: number, quantity: number): JQueryPromise<string> {
        var cartRecord = new ShoppingCartRecord();

        cartRecord.CustomerId = userId;
        cartRecord.ProductId = productId;
        cartRecord.Quantity = quantity;

        return $.ajax({
            url: this.getRootUrl() + "/shoppingcart/" + userId,
            data: JSON.stringify(cartRecord),
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    updateCartRecord(userId: number, cartRecord: ShoppingCartRecord): JQueryPromise<ShoppingCartRecord> {

        return $.ajax({
            url: this.getRootUrl() + "/shoppingcart/" + userId + "/" + cartRecord.Id,
            data: JSON.stringify(cartRecord),
            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    removeCartRecord(userId: number, cartRecord: ShoppingCartRecord): JQueryPromise<void> {

        return $.ajax({
            url: this.getRootUrl() + "/shoppingcart/" + userId + "/" + cartRecord.Id + "/" +  encodeURIComponent('"' + cartRecord.TimeStamp + '"'),
            method: 'delete',
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    // removeCartRecord(cartRecord: ShoppingCartRecord): Observable<Response> {
    //     return this.http.delete("http://localhost:40001/api/shoppingcart/" +  this._userService.User.Id + "/" + cartRecord.Id + "/" + encodeURIComponent('"' + cartRecord.TimeStamp + '"'));
    // }

    // buy(): Observable<Response> {
    //     var headers = new Headers();
    //     headers.append('Content-Type', 'application/json');
    //     return this.http.post("http://localhost:40001/api/shoppingcart/" + this._userService.User.Id + "/buy", JSON.stringify({ Id: this._userService.User.Id }), { headers: headers });
    // }
}