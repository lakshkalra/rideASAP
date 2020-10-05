import { Component, OnInit } from '@angular/core';
import { TravelService } from '../travel.service';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
public hashcode: string = this.travel.hashqr;
public src: string = this.travel.source;
public dest: string = this.travel.destination;
public tprice: string = this.travel.total_price;
public arrivalTime: string = this.travel.arrtime;
public name: string = this.travel.name;
public rtime: string = this.travel.reachTime;
public tdist: string = this.travel.distance;
public ttime: string = this.travel.tottime;
 

  constructor(private travel: TravelService) { }
  ngOnInit(): void {
  }
    

}
