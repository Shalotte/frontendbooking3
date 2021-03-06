import { Component, OnInit } from '@angular/core';
import {User1Service} from '../user1.service';
import {User} from '../user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  private user = new User();
  public userError = new User();
  public isCreated: boolean= false;
  public userExist: boolean=false;
  

  
  constructor(private _userService: User1Service, private _router:Router) { }
  
  ngOnInit() {
  
  }
    
  createUser1(){

  this._userService.createUser1(this.user).subscribe((data)=>{
  console.log(data);
  
  this.user= new User();
  this.isCreated=true;
  this.userExist=false;
 
  }
  
  ,(error)=>{
  this.userError=error.error;
  this.isCreated= false;

  if(error.status==409){
  this.isCreated= false;
  this.userExist=true;
  }

  console.log(error);
  
  //let map = new Map <String, String>();
 // map.=Object.values(error)[0];
  
  //let map = new console.log(Object.values(error)[0]);

  //map.get("email");

  //let map = Object.keys(error).forEach((key)=> {console.log(error[key])});
 
  });

  
  
 
  }

}
