import { HttpClient, HttpParams } from "@angular/common/http";
import { Component } from "@angular/core";
import { Inventory } from "./inventory.model";




@Component({
    templateUrl: './inventory.component.html'
  })
  export class InventoryComponent {
  
    constructor(private http: HttpClient) {
  
  
    }
    ngOnInit(): void {
      this.GetInventoryData();
    }
  
    GetInventoryData() {
      this.http.get("https://localhost:44326/api/Airline").subscribe(res => this.GetFromServer(res), res => console.log(res));
    }
    GetFromServer(res: any) {
      console.log(res);
      this.InventoryModels = res;
    } 
    InventoryModel:Inventory= new Inventory();
    InventoryModels:Array<Inventory> = new Array<Inventory>();
  
    AddInventory(){
        
      var inventorydto = {
        flightIdnum:Number(this.InventoryModel.flightIdnum),
        airlineId: Number(this.InventoryModel.airlineId),
        airlinename: this.InventoryModel.airlinename,
        fromplace: this.InventoryModel.fromplace,    
        toplace: this.InventoryModel.toplace,
        startdatetime: new Date(),
        enddatetime: new Date(), 
        scheduleddays:  this.InventoryModel.scheduleddays,
        businessclsseats: Number(this.InventoryModel.businessclsseats),
        nonbusinessclsseats: Number(this.InventoryModel.nonbusinessclsseats),
        ticketprice: Number(this.InventoryModel.ticketprice),
        noofrows: Number( this.InventoryModel.noofrows),
        meal:  this.InventoryModel.meal
      
      }
      console.log(inventorydto);
      console.log(this.InventoryModel);
      this.http.post("https://localhost:44326/api/Airline/Inventory/Add", inventorydto).subscribe(res => { this.GetInventoryData(); console.log(res) }, res => console.log(res));
     // this.InventoryModel = new Inventory();
    }                                  
  
    EditInventory(cust: Inventory) {
      this.InventoryModel = cust;
    }

    
    DeleteInventory(cust: Inventory) {
      console.log(cust);
      let httparms = new HttpParams().set("Id", cust.airlineId);
      let options = { params: httparms };
      // this.CustomerModels=this.arrayRemove( this.CustomerModels,Customer)
      this.http.delete("https://localhost:44326/api/Airline", options).subscribe(res => { this.GetInventoryData(); console.log(res) }, res => console.log(res));
  
    }
  
    arrayRemove(arr: any, value: any) {
      return arr.filter(function (sample: any) {
        return sample != value;
      });
    }
  
  }