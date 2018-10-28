import { Component, OnInit } from '@angular/core';
import {BsDatepickerConfig} from 'ngx-bootstrap/datepicker';
import { first } from 'rxjs/operators';
import {User} from '../user';
import {Listproperty} from '../listproperty';
import { Destination } from '../destination';
<<<<<<< HEAD
import { ListpropertyService } from '../shared_services/listproperty.service';
=======
import { DestinationService } from '../shared_services/destination.service';
>>>>>>> e1484a661bdc2a19a365017ff6d1548da096a473
import { Router } from '../../../node_modules/@angular/router';
import { isNull } from '../../../node_modules/@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-customer-layout',
  templateUrl: './customer-layout.component.html',
  styleUrls: ['./customer-layout.component.scss']
})
export class CustomerLayoutComponent implements OnInit {
  datePickerConfig: Partial<BsDatepickerConfig>;
  myDateValue: Date;
  user: User;
 
 
<<<<<<< HEAD
  private listproperty:Listproperty;

  constructor(private _listpropertyService:ListpropertyService,private router:Router) {
=======
  private destination:Destination;

  constructor(private _destination:DestinationService,private router:Router) {
>>>>>>> e1484a661bdc2a19a365017ff6d1548da096a473
      this.user = JSON.parse(localStorage.getItem('user'));
      this.datePickerConfig = Object.assign({},{containerClass: 'theme-dark-blue'});
  }

  
  ngOnInit() {}

  searchDestination(destination:string, rooms:number,guests:number){

    console.log("Inputs==",destination, rooms,guests);
<<<<<<< HEAD
      this._listpropertyService.search_Destination(destination,rooms,guests).subscribe(results=>
        { this.listproperty = results;
          console.log("search results++",this.listproperty);
          this._listpropertyService.saveResults(this.listproperty);
          
          if(Object.keys(this.listproperty).length==0){
=======
      this._destination.search_Destination(destination,rooms,guests).subscribe(results=>
        { this.destination = results;
          console.log("search results++",this.destination);
          this._destination.saveResults(this.destination);
          
          if(Object.keys(this.destination).length==0){
>>>>>>> e1484a661bdc2a19a365017ff6d1548da096a473
            alert('Oops destination not found!!');
            this.router.navigate(['/custlayout'])
            
          } 
<<<<<<< HEAD
          if(Object.keys(this.listproperty).length>0){this.router.navigate(['/foundProperty']);}
=======
          if(Object.keys(this.destination).length>0){this.router.navigate(['/foundProperty']);}
>>>>>>> e1484a661bdc2a19a365017ff6d1548da096a473
       
        });
      
    }

  onDateChange(newDate: Date) {
    console.log(newDate);
  }


  
  
    

}



