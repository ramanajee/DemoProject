import { Component, Inject, OnInit } from '@angular/core';

import { Router} from '@angular/router';

@Component({
  selector: 'cnh-page-main',
  templateUrl: './main-page.component.html',
  styleUrls: [ './main-page.component.scss' ]
})
export class CnhPageMainComponent implements OnInit {

  public sidebarOpen: boolean = false;
    
  public menu: any[] = [
    { label: "INBOX", link: '/inbox' },
    { label: "DATA ACCESS", link: '/data-access' },
    { label: "App", link: '/app-integrations' },
  ];

  public applicationList: any[];

  public userFullnameInitials: string;
  public userFullname: string;
  public userEmail: string;
  public applicationTitle: string = "Farm";
  public sidebarItems: any[] =[
    {
      name: 'farm',
      icon: 'latmenu-app-farm',
      url: "/FARM",
      active: true
    },
    {
      name: 'fleet',
      icon: 'latmenu-app-fleet',
      url: "FLEET"
    },
    {
      name: 'data',
      icon: 'latmenu-app-data',
      url: "/DATA",
      
    }
  ];

  public buildVersion: string;
  public buildDate: string;

  constructor(
    
    private router: Router,
  ) {

    this.buildVersion = "version";
    this.buildDate = "18/08/2018";



    this.applicationList = [{
      icon: 'topbar-apps-drawer',
      label: "brandName",
      href:  '#',
    }];
  }

  public ngOnInit() {
    this.router.navigate(['farm/companyList']);
          this.userFullname = `User Name`;
          this.userEmail = "Email Address";
          this.userFullnameInitials = "TT";     
  }

  public logoutClicked(): void {
    
  }

  public applicationItemClick(href) {
    window.location.href = href;
  }

}
