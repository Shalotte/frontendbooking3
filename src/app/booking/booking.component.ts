import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {Listproperty} from '../listproperty';
import { BookingService } from '../shared_services/booking.service';
import { Customerdetails } from '../customerdetails';
import {Router} from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
private user: User;
private properties:Listproperty[];
private property:Listproperty;
private CustomerDetails:Customerdetails[];
private customerDetails= new Customerdetails();
public bodyText: string;
public bookingError = new User();
public isCreated: boolean= false;
public bookingExist: boolean=false;

constructor(private bookingService:BookingService, private _router: Router) {

 this.user = JSON.parse(localStorage.getItem('user'));
  this.properties = JSON.parse(localStorage.getItem('properties'));
  
}

ngOnInit() {
}

createBooking(){
  this.bookingService.createBooking(this.user.id,this.properties[0].id,this.customerDetails).subscribe((data)=>{
  console.log(data)
  this.customerDetails= new Customerdetails();
  this.isCreated=true;
  this.bookingExist=false;
  this.bookingError= new User();

  if(this.isCreated=true){
    alert('Your booking has been successfully made, go on to make payment.');
  this._router.navigate(['payment']);
  }
  },
  (error)=>{
    this.bookingError=error.error;
    this.isCreated= false;
    console.log(error);
    if(error.status==409){
    this.isCreated= false;
    this.bookingExist=true;   
  }}
)


}




}
