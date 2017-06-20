import {Component, OnInit} from "@angular/core";
import { ActivatedRoute, Params } from '@angular/router';
import {ProductService}   from '../product.service';
import {LoggingService} from '../logging.service';

@Component({
    templateUrl: "/app/components/products.html",
})
export class ProductsComponent implements OnInit {
    products: any[];
	header: string;

    constructor(
        private _route: ActivatedRoute,
        private _service: ProductService,
        private _loggingService: LoggingService) { }

    ngOnInit() {
        this._route.params.subscribe(params => {
            if ("categoryId" in params) {
                let categoryId: number = +params["categoryId"];
                this._service.getCategory(categoryId).subscribe(category =>
                    this.header = category.CategoryName, err => this._loggingService.logError("Error Loading Category", err));
                this._service.getProductsForACategory(categoryId).subscribe(products =>
                    this.products = products, err => this._loggingService.logError("Error Loading Products", err));
            } else if (!("searchText" in this._route.snapshot.queryParams)) {
                this.getFeaturedProducts();
            }
        });

        this._route.queryParams.subscribe(params => {
            if ("searchText" in params) {
                let searchText: string = params["searchText"];
                this.header = "Search for: " + searchText;
                this._service.getSearchProducts(searchText).subscribe(products =>
                    this.products = products, err => this._loggingService.logError("Error Loading Featured Products", err));
            } else if (!("categoryId" in this._route.snapshot.params)) {
                this.getFeaturedProducts();
            }
        });
    }

    getFeaturedProducts() {
        this._service.getFeaturedProducts().subscribe(products => {
            this.header = "Featured Products";
            this.products = products
        }, err => this._loggingService.logError("Error Loading Featured Products", err));
    }

}