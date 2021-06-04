import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';
import {AfterViewInit,  ElementRef, ViewChild} from '@angular/core';
import { Inject }  from '@angular/core';
import { DOCUMENT } from '@angular/common'; 
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import swal from 'SweetAlert';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {
flag:Boolean=false;
  i=0;
  j=0;
  seats=[];
  ab;
Name=this.member.rname;
Branch=this.member.rbranch;
Email=this.member.reid;
Rgno=this.member.rguestno;
// @ViewChild('v') ad :ElementRef;
  constructor(public member:MemberService, public router:Router,@Inject(DOCUMENT) document) { 
    // member.getseats();
    
  }

  ngOnInit() {
    this.disableseat();
  }
  print(){
    this.Name="";
    this.Branch="";
    this.Email="";
    this.router.navigateByUrl('/display')
  }

  disableseat(){
    for(this.j=0;this.j<this.member.sdata[0].regions.length;this.j++){
      var v=this.member.sdata[0].regions[this.j];
      console.log(v);
      // let ab;
      var a=document.getElementById(v);
      
      a.setAttribute("disabled", "disabled");
     
      // var a = document.getElementById(v);
     // console.log(a);
      // document.getElementById(v)
      a.setAttribute("checked", "true");
     
    }
  }

  checkCheckBoxValue(event){
    if(event.target.checked){

    console.log(event.target.value);
    this.seats.push(event.target.value)
    console.log(this.seats)
    }
  }
  addseats(){
    swal({
      text: "Your seats are booked!",
      icon: "success",
    });
    
     console.log(this.Name);
     console.log(this.seats);

     this.member.addSeats(this.Name,this.Branch,this.Email,this.seats)
    // formData.resetForm()
    for(this.i=0;this.i<this.seats.length;this.i++){
      this.member.seatData(this.seats[this.i]);
    }
   
    
    }

}
