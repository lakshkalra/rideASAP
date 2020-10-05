import { Component, OnInit } from '@angular/core';
import { Location } from '../travelloc';
import { TravelService } from '../travel.service';
import {Book} from '../book';
import {Router} from '@angular/router';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {
  distance="";
  time="";
  totalPrice="";
  deptime="";
  dispath=[];
  apple= [];
  locate = new Location("","","");
  book = new Book(this.travel.email,this.travel.source,this.travel.destination,this.travel.total_price,this.travel.arrtime,this.travel.reachTime,this.travel.tottime);
  constructor(private travel: TravelService,private router: Router) { }

  ngOnInit(): void {
  }

  Openpopup()
  {
    document.getElementById("overlay").style.visibility = "visible";
    document.getElementById("overlay").style.opacity = "1";
    document.getElementById("marketing").style.opacity="0.2";
  }
  Closepopup()
  {
    document.getElementById("overlay").style.visibility = "hidden";
    document.getElementById("overlay").style.opacity = "0";
    document.getElementById("marketing").style.opacity="1";
  }
  sendbook()
  {
    this.book.source=this.travel.source;
    this.book.destination=this.travel.destination;
    this.book.price=this.travel.total_price;
    this.book.email=this.travel.email;
    this.book.arrtime=this.travel.arrtime;
    this.book.reachTime=this.travel.reachTime;
    this.book.tottime=this.travel.tottime;
    console.log(this.book);
    
    this.travel.bookinfo(this.book)
    .subscribe(
      data =>{        
        console.log('Success!',data);
        this.travel.name=data.name;
        this.travel.source=data.source;
        this.travel.destination=data.destination;
        this.travel.total_price=data.price;
        this.travel.tottime=data.totalTime;
        this.travel.arrtime=data.arrtime;
        this.travel.hashqr=data.ticket;
        this.travel.reachTime=data.reachTime;


        console.log(this.travel.hashqr);
        this.router.navigate(['/Ticket']);
        },
      error => console.log('Error',error)
    )
  }
  onSubmit()
  {
      this.travel.loc(this.locate)
    .subscribe(
      data =>{        
        console.log('Success!',data);
        console.log(data.source);
        var Ppath = Object.keys(data.path)
        // data at book now
        this.travel.source=data.source;
        this.travel.destination=data.destination;
        this.travel.total_price=data.total_price;
        this.travel.arrtime=data.arrival_time;
        this.travel.reachTime=data.reach_time;
        this.travel.tottime=data.time_taken;        
        this.travel.distance=data.total_distance;
        // 
        this.distance=data.total_distance;
        this.time=data.time_taken;
        this.deptime=data.arrival_time;
        this.totalPrice=data.total_price;
        this.dispath=data.distributed_path;

        this.apple=[];
        for(Ppath[0] in data.path){
          this.apple.push(data.path[Ppath[0]])          
         }
        },
      error => console.log('Error',error)
    )


}

}
