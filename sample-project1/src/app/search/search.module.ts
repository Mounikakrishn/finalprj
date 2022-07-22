import { CommonModule } from "@angular/common";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { Searchroutes } from "../routing/searchroutes";
import { TokenInterceptorService } from "../services/token-interceptor.service";
import { SearchComponent } from "./search.component";




@NgModule({
    declarations: [
        SearchComponent
    ],
    imports: [
        CommonModule,       
         FormsModule,
        RouterModule.forChild(Searchroutes),
        HttpClientModule,
        ReactiveFormsModule
    ],
    providers: [{ provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true }],
    bootstrap: [SearchComponent]
})
export class SearchModule { }
