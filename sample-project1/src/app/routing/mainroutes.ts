import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { SearchComponent } from '../search/search.component';
import { AuthgaurdService } from '../services/authgaurd.service';

export const Mainroutes = [
  { path: 'Home', component: HomeComponent },
  //{ path: 'register', component: RegisterComponent },
  {path:'login',component: LoginComponent},
  {path:'dashboard',
   canActivate:[AuthgaurdService],
  component: DashboardComponent},
  { path: 'Home', component: HomeComponent },
  { path: 'Airline', loadChildren:()=>import('../airline/airline.module').then(m=>m.AirlineModule) },
  { path: 'Booking', loadChildren:()=>import('../booking/booking.module').then(m=>m.BookingModule) },
  { path: 'Inventory', loadChildren:()=>import('../inventory/inventory.module').then(m=>m.InventoryModule) },
  { path: 'Search', loadChildren:()=>import('../search/search.module').then(m=>m.SearchModule) },
  { path: 'Ticket', loadChildren:()=>import('../ticketdetails/ticket.module').then(m=>m.TicketModule) }
  
]; 