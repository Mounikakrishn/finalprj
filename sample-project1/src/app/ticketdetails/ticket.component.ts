import { HttpClient, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { Ticket } from './ticket.model';

@Component({
  templateUrl: './ticket.component.html'
})
export class TicketComponent {

  constructor(private http: HttpClient) {


  }
  ngOnInit(): void {
    this.GetTicketData();
  }

  GetTicketData() {
    this.http.get("https:localhost:44340/api/1.0/flight/ticket?PNR="+this.TicketModel.pnr).subscribe(res => this.GetFromServer(res), res => console.log(res));
  }
  GetFromServer(res: any) {
    console.log(res);
    this.TicketModels = res;
  } 
  TicketModel:Ticket= new Ticket();
  TicketModels:Array<Ticket> = new Array<Ticket>();


  

}