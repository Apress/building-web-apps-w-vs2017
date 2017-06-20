import { ShoppingCartRecord } from "./shoppingCartRecord";

export class Cart {
    private _cartRecords: ShoppingCartRecord[] = [];

    constructor(cartRecords: ShoppingCartRecord[]) {
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