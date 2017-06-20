import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { LoggingService } from '../logging.service';


@Component({
    templateUrl: "app/components/checkout.html"
})
export class CheckoutComponent {

    constructor(private _cartService: CartService, private _router: Router, private _loggingService: LoggingService) { }

    checkout() {
        this._cartService.buy().subscribe((response) => {
            if (response.status == 201) {
                this._router.navigate(['/products']);
            }
            else {
                this._loggingService.log(response.statusText);
            }
        }, err => this._loggingService.logError("Error Checking out", err));
    }
}