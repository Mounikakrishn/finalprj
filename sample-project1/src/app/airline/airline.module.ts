import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { Airlineroutes } from '../routing/airlineroutes';
import { RouterModule } from '@angular/router';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { TokenInterceptorService } from '../services/token-interceptor.service';
import { AirlineComponent } from './airline.component';


@NgModule({
    declarations: [
        AirlineComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(Airlineroutes),
        HttpClientModule
        
    ],
    providers: [{ provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true }],
    bootstrap: [AirlineComponent]
})
export class AirlineModule { 
    
}
