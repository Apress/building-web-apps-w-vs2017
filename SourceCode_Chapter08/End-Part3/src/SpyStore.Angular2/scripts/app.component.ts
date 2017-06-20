import { Component, OnInit } from "@angular/core";
import { Router, NavigationExtras } from "@angular/router";

@Component({
    selector: "spystore-app",
    templateUrl: "/app/app.html"
})
export class AppComponent implements OnInit {
    searchText: string;

    constructor(private _router: Router) {
    }

    ngOnInit() {
    }

    search() {
        let navigationExtras: NavigationExtras = {
            queryParams: { 'searchText': this.searchText }
        };

        this._router.navigate(['/products'], navigationExtras);
    }
}