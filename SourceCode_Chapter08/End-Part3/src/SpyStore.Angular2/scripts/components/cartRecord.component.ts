import {Component, Input, Output, EventEmitter} from "@angular/core";
import {CartService, ShoppingCartRecord}   from '../cart.service';
import {LoggingService} from '../logging.service';

@Component({
    selector: "[cart-record]",
    templateUrl: "app/components/cartRecord.html",
})
export class CartRecordComponent {
    @Input() record: ShoppingCartRecord;
    @Output() onRecordRemoved = new EventEmitter<ShoppingCartRecord>();

    constructor(private _cartService: CartService, private _loggingService: LoggingService) { }

    updateItem() {
        this._cartService.updateCartRecord(this.record).subscribe((response) => {
            if (response.status == 201) {
                this.record.LineItemTotal = this.record.Quantity * this.record.CurrentPrice;
                this.record.TimeStamp = response.json().TimeStamp;
            }
        }, err => this._loggingService.logError("Error Updating Cart Item", err),
        () => console.log('Update Complete'));
    }

    removeItem() {
        this._cartService.removeCartRecord(this.record).subscribe((response) => {
            if (response.status == 204) {
                this.onRecordRemoved.emit(this.record);
            }
        }, err => this._loggingService.logError("Error Deleting Cart Item", err),
        () => console.log('Delete Complete'));
    }
}