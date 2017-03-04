import { Component, OnInit } from '@angular/core';

import { NavMenuService } from './navmenu.service';
import { Identity } from './navmenu.model';

@Component({
    selector: 'nav-menu',
    template: require('./navmenu.component.html'),
    styles: [require('./navmenu.component.css')],
    providers: [NavMenuService]
})
export class NavMenuComponent implements OnInit {
  user: Identity;
  error: string;

  constructor(
    private navmenuService: NavMenuService
  ) { }

  ngOnInit() {
    this.navmenuService.getIdentity()
      .subscribe(
      success => {
        this.user = success;
        console.log(JSON.stringify(this.user));
      },
      error => {
        this.error = <any>error;
      });
  }
}
