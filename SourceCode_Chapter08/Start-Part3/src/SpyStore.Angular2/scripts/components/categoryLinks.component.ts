import {Component, OnInit} from "@angular/core";
//import {RouterLink} from '@angular/router';
import {ProductService}   from '../product.service';

@Component({
	selector: "[categoryLinks]",
    templateUrl: "/app/components/categoryLinks.html",
  //  directives: [RouterLink]
})
export class CategoryLinksComponent implements OnInit {
    categories: any[];

    constructor(private _service: ProductService) { }

    ngOnInit() {
		this._service.getCategories().subscribe(cats =>
			this.categories = cats);
    }
}