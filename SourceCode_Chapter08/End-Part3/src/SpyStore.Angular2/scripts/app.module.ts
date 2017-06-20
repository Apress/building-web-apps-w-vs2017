import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { AppRoutingModule, routedComponents } from './app.routing';
import { APP_CONFIG, SPYSTORE_CONFIG } from './app.config'
import { AppErrorHandler } from './app.errorhandler';

import { AppComponent } from './app.component';
import { CategoryLinksComponent } from "./components/categoryLinks.component";
import { CartRecordComponent } from "./components/cartRecord.component";

import { CartService } from './cart.service';
import { LoggingService } from './logging.service';
import { ProductService } from './product.service';
import { UserService } from './user.service';


@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        DropdownModule.forRoot(),
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        CategoryLinksComponent,
        CartRecordComponent,
        routedComponents
    ],
    providers: [
        CartService,
        LoggingService,
        ProductService,
        UserService,
        { provide: APP_CONFIG, useValue: SPYSTORE_CONFIG },
        { provide: ErrorHandler, useClass: AppErrorHandler }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
