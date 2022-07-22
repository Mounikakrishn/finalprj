import { HttpClient, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { Airline } from './airline.model';

@Component({
    templateUrl: './airline.component.html'
    
  })
  export class AirlineComponent {
  
    constructor(private http: HttpClient) {
  
  
    }
    ngOnInit(): void {
      this.GetAirlineData();
    }
  
    GetAirlineData() {
      this.http.get("https://localhost:44378/api/Admin").subscribe(res => this.GetFromServer(res), res => console.log(res));
    }
    GetFromServer(res: any) {
      console.log(res);
      this.airlinedataModels = res;
    } 
    airlinedataModel:Airline= new Airline();
    airlinedataModels:Array<Airline> = new Array<Airline>();
  
    AddAirline(){
        
      var airlinedto = {
        airlineId: Number(this.airlinedataModel.airlineId),
        airlineName: this.airlinedataModel.airlineName,
        airlineLogo: this.airlinedataModel.airlineLogo,
        address: this.airlinedataModel.address,
        contactNumber: this.airlinedataModel.contactNumber
      }
      console.log(airlinedto);  
      console.log(this.airlinedataModel);
      this.http.post("https://localhost:44378/api/Admin/Register", airlinedto).subscribe(res => { this.GetAirlineData(); console.log(res) }, res => console.log(res));
      this.airlinedataModel = new Airline();
    }
  
    EditAirline(cust: Airline) {
      this.airlinedataModel = cust;
    }
    DeleteAirline(cust: Airline) {
      console.log(cust);
      let httparms = new HttpParams().set("Id", cust.airlineId);
      let options = { params: httparms };
      // this.CustomerModels=this.arrayRemove( this.CustomerModels,Customer)
      this.http.delete("https://localhost:44378/api/Admin", options).subscribe(res => { this.GetAirlineData(); console.log(res) }, res => console.log(res));
  
    }
  
    arrayRemove(arr: any, value: any) {
      return arr.filter(function (sample: any) {
        return sample != value;
      });
    }
  
  }