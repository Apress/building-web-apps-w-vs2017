import { Component, OnInit } from "@angular/core";
import { Router, NavigationExtras } from "@angular/router";

@Component({
    selector: "spystore-app",
    templateUrl: "/app/app.html"
})
export class AppComponent implements OnInit {
    
    constructor(private _router: Router) {
    }

    ngOnInit() {
    }
}