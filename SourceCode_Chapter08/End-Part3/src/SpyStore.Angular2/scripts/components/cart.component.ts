import {Component, OnInit} from "@angular/core";
import {Cart, ShoppingCartRecord, CartService}   from '../cart.service';
import {CartRecordComponent} from './cartRecord.component'


@Component({
    templateUrl: "app/components/cart.html"
})
export class CartComponent implements OnInit {
    cart: Cart;

    constructor(private _cartService: CartService) { }

    ngOnInit() {

        this._cartService.getCart().subscribe(cart =>
            this.cart = cart);
    }

    onCartRecordRemoved(record: ShoppingCartRecord) {
        var index :number = this.cart.CartRecords.indexOf(record, 0);
        if (index > -1) {
            this.cart.CartRecords.splice(index, 1);
        }
    }
}