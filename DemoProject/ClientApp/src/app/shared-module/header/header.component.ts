import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  drawerOpen: Boolean = false;

  constructor() {}

  ngOnInit() {}

  openNav() {
    this.drawerOpen = !this.drawerOpen;
  }
}
