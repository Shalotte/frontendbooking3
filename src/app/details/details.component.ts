import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import { BookingService } from '../shared_services/booking.service';
import { Customerdetails } from '../customerdetails';
import {Router} from '@angular/router';
<<<<<<< HEAD
import {Listproperty} from '../listproperty';

=======
>>>>>>> e1484a661bdc2a19a365017ff6d1548da096a473

@Component({
  selector: 'bookingdetails',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})

export class DetailsComponent implements OnInit {
  user: User;
  private customerDetails= new Customerdetails();
  public bodyText: string;
  public bookingError = new User();
  public isCreated: boolean= false;
  public bookingExist: boolean=false;
<<<<<<< HEAD
  listproperty:Listproperty;

=======
 
>>>>>>> e1484a661bdc2a19a365017ff6d1548da096a473
  constructor(private bookingService:BookingService, private _router: Router) { 
  this.user = JSON.parse(localStorage.getItem('user'));
  }

  ngOnInit() {
  }
  
  createBooking(){
<<<<<<< HEAD
    this.bookingService.createBooking(this.user.id,this.listproperty.id,this. customerDetails).subscribe((data)=>{
=======
    this.bookingService.createBooking(this.customerDetails).subscribe((data)=>{
>>>>>>> e1484a661bdc2a19a365017ff6d1548da096a473
    console.log(data)
    this.customerDetails= new Customerdetails();
    this.isCreated=true;
    this.bookingExist=false;
    this.bookingError= new User();

    if(this.isCreated=true){
    this._router.navigate(['payment']);
    }
    },
    (error)=>{
      this.bookingError=error.error;
      this.isCreated= false;
      
      if(error.status==409){
      this.isCreated= false;
      this.bookingExist=true;   
    }}
  )
  

}
}