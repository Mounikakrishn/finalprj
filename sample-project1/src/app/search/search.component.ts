import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Search } from './search.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  constructor(private http: HttpClient, private _router: Router) {
  
  }
 
  ngOnInit(): void {
  }

  GetSearchData() {
    this.http.get("https://localhost:44396/api/1.0/flight/search?fromplace="+this.SearchModel.fromplace).subscribe(res => this.GetFromServer(res), res => console.log(res));
  }               
  GetFromServer(res: any) {
    console.log(res);
    this.SearchModels = res;
  } 
  SearchModel:Search= new Search();
  SearchModels:Array<Search> = new Array<Search>();

  //AddSearch(){
      
  //  var inventorydto = {
    //  fromplace: this.SearchModel.fromplace    
    //  
  //  }
   // console.log(inventorydto);
   // console.log(this.SearchModel);
   // this.SearchModel = new Search();

 // }                                  

  BookFlight() {
    this._router.navigate(['Booking/Add']);
  }
  

}