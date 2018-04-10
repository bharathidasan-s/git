import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { SidebarService } from '../shared/services/sidebar.service';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
    @ViewChild('sidenav') public sidenav: MatSidenav;
    constructor(private sideService:SidebarService) {}

    ngOnInit() {}
}
