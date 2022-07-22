import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { TokenInterceptorService } from '../services/token-interceptor.service';
import { Bookingroutes } from '../routing/bookingroutes';
import { TicketComponent } from './ticket.component';
import { Ticketroutes } from '../routing/ticketroutes';


@NgModule({
    declarations: [
        TicketComponent
    ],
    imports: [
        CommonModule,       
         FormsModule,
        RouterModule.forChild(Ticketroutes),
        HttpClientModule,
        ReactiveFormsModule
    ],
    providers: [{ provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true }],
    bootstrap: [TicketComponent]
})
export class TicketModule { }
