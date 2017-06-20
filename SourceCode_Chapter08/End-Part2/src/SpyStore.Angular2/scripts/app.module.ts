import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule, routedComponents } from './app.routing';
import { APP_CONFIG, SPYSTORE_CONFIG } from './app.config'

import { ProductService } from './product.service';


@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        routedComponents
    ],
    providers: [
        ProductService,
        { provide: APP_CONFIG, useValue: SPYSTORE_CONFIG }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
