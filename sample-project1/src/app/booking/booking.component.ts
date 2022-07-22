import { HttpClient, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { Booking } from './booking.model';

@Component({
  templateUrl: './booking.component.html'
})
export class BookingComponent {

  constructor(private http: HttpClient) {


  }
  ngOnInit(): void {
    this.GetBookingData();
  }

  GetBookingData() {
    this.http.get("https://localhost:44317/api/1.0/flight/booking").subscribe(res => this.GetFromServer(res), res => console.log(res));
  }
  GetFromServer(res: any) {
    console.log(res);
    this.BookingModels = res;
  } 
  BookingModel:Booking= new Booking();
  BookingModels:Array<Booking> = new Array<Booking>();

  AddBooking(){
      
    var customerdto = {
      airlineId: Number(this.BookingModel.airlineId),
      airlinename: this.BookingModel.airlinename,
      username: this.BookingModel.username,    
      gender: this.BookingModel.gender,
      seatnum: Number(this.BookingModel.seatnum),
      address: this.BookingModel.address,
      contact: this.BookingModel.contact,
      email: this.BookingModel.email
    
    }
    console.log(customerdto);
    console.log(this.BookingModel);
    this.http.post("https://localhost:44317/api/1.0/flight/booking/BookingTicket", customerdto).subscribe(res => { this.GetBookingData(); console.log(res) }, res => console.log(res));
    this.BookingModel = new Booking();
  }                                  

  EditBooking(cust: Booking) {
    this.BookingModel = cust;
  }
  DeleteBooking(cust: Booking) {
    console.log(cust);
    let httparms = new HttpParams().set("Id", cust.airlineId);
    let options = { params: httparms };
    // this.CustomerModels=this.arrayRemove( this.CustomerModels,Customer)
    this.http.delete("https://localhost:44318/api/Customer/delete", options).subscribe(res => { this.GetBookingData(); console.log(res) }, res => console.log(res));

  }

  arrayRemove(arr: any, value: any) {
    return arr.filter(function (sample: any) {
      return sample != value;
    });
  }

}