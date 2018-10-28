import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {Listproperty} from '../listproperty';
import {BookingService} from '../shared_services/booking.service';
import {Customerdetails} from '../customerdetails';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-booking',
  templateUrl: './update-booking.component.html',
  styleUrls: ['./update-booking.component.scss']
})
export class UpdateBookingComponent implements OnInit {

private user: User;
private customerdetails = new Customerdetails();
private properties:Listproperty[];

constructor(private bookingService:BookingService, private _router: Router) {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.properties = JSON.parse(localStorage.getItem('properties'));
    
   }
  ngOnInit() {
    this.customerdetails = this.bookingService.getter();
  }

  processProperty(){
    this.bookingService.updateBooking(this.user.id, this.properties[0].id,this.customerdetails).subscribe((customerdetails)=>{
      console.log(customerdetails);
      this._router.navigate(['/listbooking']);
      },(error)=>{
      console.log(error);
      });
    }

}
