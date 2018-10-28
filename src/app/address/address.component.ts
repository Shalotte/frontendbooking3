import { Component, OnInit } from '@angular/core';
import { BookingService } from '../shared_services/booking.service';
import { Customerdetails } from '../customerdetails';

@Component({
  selector: 'custaddress',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

private customerdetails= new Customerdetails();
public bodyText: string;
public bookingError = new Customerdetails();
public isCreated: boolean= false;
public bookingExist: boolean=false;

constructor(private bookingService: BookingService) { }

ngOnInit() {
}

<<<<<<< HEAD
//createBooking(){
//this.bookingService.createBooking(this.customerdetails).subscribe((data)=>{
//console.log(data);

//}
//)
//}
=======
createBooking(){
this.bookingService.createBooking(this.customerdetails).subscribe((data)=>{
console.log(data);

}
)
}
>>>>>>> e1484a661bdc2a19a365017ff6d1548da096a473
}
