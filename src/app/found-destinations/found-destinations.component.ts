import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { ListpropertyService } from '../shared_services/listproperty.service';
import { Listproperty } from '../listproperty';
=======
import { DestinationService } from '../shared_services/destination.service';
import { Destination } from '../destination';
>>>>>>> e1484a661bdc2a19a365017ff6d1548da096a473

@Component({
  selector: 'app-found-destinations',
  templateUrl: './found-destinations.component.html',
  styleUrls: ['./found-destinations.component.scss']
})
export class FoundDestinationsComponent implements OnInit {

<<<<<<< HEAD
  private listproperty:Listproperty[];
  private images:String[]=[];
  constructor(private _listproperty:ListpropertyService) { }

  ngOnInit() {

    this.listproperty = this._listproperty.showResults();
    console.log("search works++",this.listproperty);
    localStorage.setItem('listproperty', JSON.stringify(this.listproperty));
   
=======
  private destinations:Destination[];
  private images:String[]=[];
  constructor(private _destination:DestinationService) { }

  ngOnInit() {

    this.destinations = this._destination.showResults();
    console.log("search works++",this.destinations);
>>>>>>> e1484a661bdc2a19a365017ff6d1548da096a473
    
    this.images[0]="https://media.equityapartments.com/images/c_crop,x_0,y_0,w_1920,h_1080/c_fill,w_1920,h_1080/q_80/4206-28/the-kelvin-apartments-exterior.jpg";
    this.images[1]="https://cdn.vox-cdn.com/thumbor/Nqj_NACBd-MYueCnjB2Y5ZB70ig=/0x0:3000x2000/1200x800/filters:focal(1260x760:1740x1240)/cdn.vox-cdn.com/uploads/chorus_image/image/59543123/290_West_St_3B_14.0.jpg";
    this.images[2]="https://sncdn.com/db/id/1877709/gmt_482406.jpg";
    this.images[3]="https://morukuru.com/wp-content/uploads/Atholplace_221.jpg";
  }

}
