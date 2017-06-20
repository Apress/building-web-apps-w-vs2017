import { Component, OnInit } from "@angular/core";
import { ProductService } from '../product.service';

@Component({
    templateUrl: "/app/components/products.html",
})
export class ProductsComponent implements OnInit {
    products: any[];
    header: string;

    constructor(private _service: ProductService) { }

    ngOnInit() {
        
            this.header = "Featured Products";
            this._service.getFeaturedProducts().subscribe(products =>
                this.products = products);
    }
}