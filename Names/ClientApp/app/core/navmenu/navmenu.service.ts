import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Identity } from './navmenu.model';

@Injectable()
export class NavMenuService {
  private apiUrl = 'Home/Identity';

  constructor(private http: Http) { }

  getIdentity(): Observable<Identity> {
    return this.http
      .get(this.apiUrl)
      .map((res: Response) => <Identity>res.json()) // .map is Observable
      .do(data => console.log('Identity: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  private handleError(error: Response | any) {
    // TODO - use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}

