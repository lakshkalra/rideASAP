import { Component, OnInit } from '@angular/core';
import { Signin } from '../signin';
import { from } from 'rxjs';
import {Book} from '../book';
import { SigninService } from '../signin.service';
import {TravelService} from '../travel.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-overlay-main',
  templateUrl: './overlay-main.component.html',
  styleUrls: ['./overlay-main.component.scss']
})
export class OverlayMainComponent implements OnInit {
  constructor(
    private signinDetails: SigninService,
    private travel: TravelService,
    private router: Router) { }
    book = new Book(this.travel.email,this.travel.source,this.travel.destination,this.travel.total_price,this.travel.arrtime,this.travel.reachTime,this.travel.tottime);
  ngOnInit(): void {
  }
  onClick()
  {
    this.book.source=this.travel.source;
    this.book.destination=this.travel.destination;
    this.book.price=this.travel.total_price;
    this.book.email=this.travel.email;
    console.log(this.book);
    
    this.travel.journey(this.book)
    .subscribe(
      data =>{        
        console.log('Success!',data);     
        this.travel.jrny=data;
        console.log(this.travel.jrny);
                   
        this.router.navigate(['/Journeys']);
        },
      error => console.log('Error',error)
    )
  }
  onLogout()
  {
    this.signinDetails.Logout();
    this.router.navigate(['Sign-In']);
    return false;
  }
}
