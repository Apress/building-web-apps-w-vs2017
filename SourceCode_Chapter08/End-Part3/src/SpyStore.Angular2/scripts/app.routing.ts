import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from "./components/products.component";
import { ProductDetailComponent } from "./components/productDetail.component";
import { CartComponent } from "./components/cart.component";
import { CheckoutComponent } from "./components/checkout.component";

const routes: Routes = [
    {
        path: '',
        redirectTo: '/products',
        pathMatch: 'full'
    },
    { path: 'products', component: ProductsComponent },
    { path: 'products/:categoryId', component: ProductsComponent },
    { path: 'product/:id', component: ProductDetailComponent },
    { path: 'cart', component: CartComponent },
    { path: 'checkout', component: CheckoutComponent }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [ProductsComponent, ProductDetailComponent, CartComponent, CheckoutComponent ];