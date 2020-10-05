import { Component,OnInit } from '@angular/core';
import {DbserviceService} from './dbservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private dbservice: DbserviceService) { }
  getClasses() {
    const classes = {
      'pinned-sidebar': this.dbservice.getSidebarStat().isSidebarPinned,
      'toggeled-sidebar': this.dbservice.getSidebarStat().isSidebarToggeled
    }
    return classes;
  }
  toggleSidebar() {
    this.dbservice.toggleSidebar();
  }
  ngOnInit():void
  {  }
  title = 'RideASAP';
}
