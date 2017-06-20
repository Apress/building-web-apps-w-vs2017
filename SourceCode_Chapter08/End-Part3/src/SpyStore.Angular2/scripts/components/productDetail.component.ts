import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params, Router, RouterLink} from '@angular/router';
import {ProductService}   from '../product.service';
import {CartService}   from '../cart.service';
import {LoggingService}   from '../logging.service';
import {UserService, User}   from '../user.service';

@Component({
    templateUrl: "app/components/productDetail.html"
})
export class ProductDetailComponent implements OnInit {
    message: string;
    isAuthenticated: Boolean;
    product: any;
    quantity: any = 1;

    constructor(
        private _router: Router,
        private _route: ActivatedRoute,
        private _productService: ProductService,
        private _cartService: CartService,
		private _userService: UserService,
        private _loggingService: LoggingService) {
        this.product = {};
        this.isAuthenticated = this._userService.IsAuthenticated;
    }

    ngOnInit() {
        this.isAuthenticated = this._userService.IsAuthenticated;
        this._userService.ensureAuthenticated().subscribe(_ =>
            this.isAuthenticated = true);

        this._route.params.subscribe((params: Params) => {
            let id: number = +params['id'];

            this._productService.getProduct(id).subscribe(product =>
                this.product = product, err => this._loggingService.logError("Error Loading Product", err));
        });
    }

    addToCart() {
		this._cartService.addToCart({
			ProductId: this.product.Id,
			Quantity: this.quantity
		}).subscribe((response) => {
			if (response.status == 201) {
				this._router.navigate(['/cart']);
			}
			else {
				this._loggingService.log(response.statusText);
			}
		}, err => this._loggingService.logError("Error Adding Cart Item", err));
    }
}