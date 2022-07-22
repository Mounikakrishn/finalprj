import { CommonModule } from "@angular/common";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { Inventoryroutes } from "../routing/inventoryroutes";
import { TokenInterceptorService } from "../services/token-interceptor.service";
import { InventoryComponent } from "./inventory.component";



@NgModule({
    declarations: [
        InventoryComponent
    ],
    imports: [
        CommonModule,       
         FormsModule,
        RouterModule.forChild(Inventoryroutes),
        HttpClientModule,
        ReactiveFormsModule
    ],
    providers: [{ provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true }],
    bootstrap: [InventoryComponent]
})
export class InventoryModule { }
