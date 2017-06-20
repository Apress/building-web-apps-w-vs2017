import { NgModule, ErrorHandler }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { DropdownModule } from 'ng2-bootstrap/components/dropdown';
import { AppRoutingModule, routedComponents } from './app.routing';
import { APP_CONFIG, SPYSTORE_CONFIG } from './app.config'
import { AppErrorHandler } from './app.errorhandler';

import { AppComponent } from './app.component';
import { CategoryLinksComponent } from "./components/categoryLinks.component";

import { CartService }   from './cart.service';
import { LoggingService }   from './logging.service';
import { ProductService }   from './product.service';
import { UserService }   from './user.service';


@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        DropdownModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        CategoryLinksComponent,
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
