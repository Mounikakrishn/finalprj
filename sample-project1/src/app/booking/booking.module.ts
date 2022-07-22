import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { TokenInterceptorService } from '../services/token-interceptor.service';
import { BookingComponent } from './booking.component';
import { Bookingroutes } from '../routing/bookingroutes';


@NgModule({
    declarations: [
        BookingComponent
    ],
    imports: [
        CommonModule,       
         FormsModule,
        RouterModule.forChild(Bookingroutes),
        HttpClientModule,
        ReactiveFormsModule
    ],
    providers: [{ provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true }],
    bootstrap: [BookingComponent]
})
export class BookingModule { }
