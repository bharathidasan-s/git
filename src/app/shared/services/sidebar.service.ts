import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SidebarService {

  // private sidenav: any;
  private sidenav: MatSidenav;
  public sideNavToggle = new Subject<any>();

  /* public setSidenav(sidenav: MatSidenav) {
    console.log("sidebar service == ",sidenav);
    this.sidenav = sidenav;
  }

  public open() {
    return this.sidenav.open();
  }

  public close() {
    return this.sidenav.close();
  }

  public toggleMenu(): void {
    this.sidenav.toggle();
  } */

}
