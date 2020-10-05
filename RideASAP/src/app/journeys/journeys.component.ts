import { Component, OnInit } from '@angular/core';
import { TravelService } from '../travel.service';

@Component({
  selector: 'app-journeys',
  templateUrl: './journeys.component.html',
  styleUrls: ['./journeys.component.scss']
})
export class JourneysComponent implements OnInit {
  jrny=this.travel.jrny;
  
  constructor(private travel: TravelService) { }
  ngOnInit(): void {
  }

}
