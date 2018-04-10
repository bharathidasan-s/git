import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { SidebarService } from './shared/services/sidebar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  screenWidth: number;
  @ViewChild('sidenav') public sidenav: MatSidenav;

  constructor(private sideService:SidebarService)  { 
    // set screenWidth on page load
  this.screenWidth = window.innerWidth;
  window.onresize = () => {
    // set screenWidth on screen size change
    this.screenWidth = window.innerWidth;
  };
  }

  ngOnInit(){ }
}
