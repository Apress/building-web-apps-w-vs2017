import { CustomerBase } from "./CustomerBase";
import { ICustomer } from "./ICustomer";
import { CustomerBronze } from "./CustomerBronze";
import { CustomerGold } from "./CustomerGold"
import { CustomerSilver } from "./CustomerSilver";
import { CustomerAnonymous } from "./CustomerAnonymous";
import { IProduct } from "./IProduct";
import { Product } from "./Product";

export class IndexVm {

    private currentCustomer: ICustomer = new CustomerAnonymous();

    private productList: Array<IProduct> = new Array(0);

    loginBronze() {
        this.currentCustomer = new CustomerBronze();
        this.setWelcomeMsg();
        this.displayProducts();
    }

    loginSilver() {
        this.currentCustomer = new CustomerSilver();
        this.setWelcomeMsg();
        this.displayProducts();
    }

    loginGold() {
        this.currentCustomer = new CustomerGold();
        this.setWelcomeMsg();
        this.displayProducts();
    }

    displayProducts() {
        this.loadProducts();

        let htmlToDisplay: string = "<th>Product Name</th><th>Price</th>";

        this.productList.forEach(product => {
            htmlToDisplay += `<tr><td>${product.name}</td><td>${product.currentPrice(this.currentCustomer)}</td></tr>`;
        });

        $("#productsTable")[0].innerHTML = htmlToDisplay;
    }

    private loadProducts() {
        this.productList.length = 0;

        this.productList.push(new Product("Product 1", 100.00));
        this.productList.push(new Product("Product 2", 200.00));
        this.productList.push(new Product("Product 3", 300.00));
        this.productList.push(new Product("Product 4", 400.00));
        this.productList.push(new Product("Product 5", 500.00));
        this.productList.push(new Product("Product 6", 600.00));
        this.productList.push(new Product("Product 7", 700.00));
        this.productList.push(new Product("Product 8", 800.00));
        this.productList.push(new Product("Product 9", 900.00));
        this.productList.push(new Product("Product 10", 1000.00));
    }

    setWelcomeMsg() {
        var msg = `Welcome ${this.currentCustomer.name}`;
        $("#customerName")[0].innerText = msg;
    }

}

export let indexVmInstance = new IndexVm();

$(document).ready(() => {
    indexVmInstance.setWelcomeMsg();
    indexVmInstance.displayProducts();
});

$('#loginBronze').click( function() {
    indexVmInstance.loginBronze();
});

$('#loginSilver').click(function () {
    indexVmInstance.loginSilver();
});

$('#loginGold').click(function () {
    indexVmInstance.loginGold();
});




