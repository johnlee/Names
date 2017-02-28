import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';

@Injectable()
export  class NameGuard implements CanActivate {

  constructor(private _router: Router) { }

  // The route only allows numeric id number or new keyword
  canActivate(route: ActivatedRouteSnapshot): boolean {
    let id = +route.url[1].path;

    if (isNaN(id) || id < 1) {
      this._router.navigate(['/Home']);
      return false;
    };

    return true;
  }
}
