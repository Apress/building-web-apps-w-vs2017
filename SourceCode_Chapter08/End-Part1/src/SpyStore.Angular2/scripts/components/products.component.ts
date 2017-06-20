import { Component, OnInit } from "@angular/core";

@Component({
    templateUrl: "/app/components/products.html",
})
export class ProductsComponent implements OnInit {
    products: any[];
    header: string;

    constructor() { }

    ngOnInit() {
        
            this.header = "Featured Products";
            this.products = [];
    }
}