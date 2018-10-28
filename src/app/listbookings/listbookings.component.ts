import { Component, OnInit } from '@angular/core';
import {User} from '../user';
<<<<<<< HEAD
import {BookingService} from '../shared_services/booking.service';
import {Customerdetails} from '../customerdetails';
import { Router } from '@angular/router';
=======
>>>>>>> e1484a661bdc2a19a365017ff6d1548da096a473

@Component({
  selector: 'app-listbookings',
  templateUrl: './listbookings.component.html',
  styleUrls: ['./listbookings.component.scss']
})
export class ListbookingsComponent implements OnInit {
  user: User;
<<<<<<< HEAD
  public customerdetails: Customerdetails[];
  constructor(private bookingService:BookingService, private _router: Router) { 
=======
  constructor() { 
>>>>>>> e1484a661bdc2a19a365017ff6d1548da096a473
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  ngOnInit() {
<<<<<<< HEAD

    this.bookingService.getBooking(this.user.id).subscribe((data: any)=>{console.log(data);
      this.customerdetails=data;
    }
    ,(error)=>{console.log(error)})
  }

  updateUser(customerdetails){
    this.bookingService.setter(customerdetails);
    this._router.navigate(['/update_booking']);
    }



  deleteBooking(customerdetails){
    this.bookingService.deleteBooking(customerdetails.id).subscribe((data)=>{console.log(data)},
    (error)=>{console.log(error);
      location.reload();
      if(error){
      alert('Your booking has been successfully deleted');
      this._router.navigate(['/listbooking']);
 }
    
    })
=======
>>>>>>> e1484a661bdc2a19a365017ff6d1548da096a473
  }

}
