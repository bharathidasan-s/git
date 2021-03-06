import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { SidebarService } from './../../../shared/services/sidebar.service';
import { MaterialModule } from '../../../material.module';
import { MatDrawer, MatSidenav } from '@angular/material';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
    isActive: boolean = false;
    showMenu: string = '';
    pushRightClass: string = 'push-right';
    @ViewChild('sidenav') public sidenav: MatSidenav;
    events = [];
 
    constructor(private translate: TranslateService, public router: Router, private sideService: SidebarService) {
        this.sideService.sideNavToggle.subscribe(() => {
            this.sidenav.toggle();
        });
        this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de']);
        this.translate.setDefaultLang('en');
        const browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de/) ? browserLang : 'en');

        this.router.events.subscribe(val => {
            if (
                val instanceof NavigationEnd &&
                window.innerWidth <= 992 &&
                this.isToggled()
            ) {
                this.toggleSidebar();
            }
        });
    }

    ngOnInit() { }

    eventCalled() {
        this.isActive = !this.isActive;
    }

    addExpandClass(element: any) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }

    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);

    }

    toggleSidebar() {
        const dom: any = document.querySelector('#sideNavBar');
        dom.classList.toggle(this.pushRightClass);
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }

    changeLang(language: string) {
        this.translate.use(language);
    }

    onLoggedout() {
        localStorage.removeItem('isLoggedin');
    }

    toggleSideMenu(tool: any) {
        console.log("toogle == ", tool.opened);
        if (tool.opened) {
            tool.close()
        } else {
            tool.open();
        }
    }
}
