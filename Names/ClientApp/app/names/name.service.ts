import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { IName } from './name.model';
import { SpinnerService } from '../core';

@Injectable()
export class NameService {
  private apiUrl = 'api/Names';

  constructor(private http: Http, private spinnerService: SpinnerService) { } 

  getName(id: number): Observable<IName> {
    return this.http
      .get(this.apiUrl + "/" + id)
      .map((res: Response) => <IName>res.json()) // .map is Observable
      .do(data => console.log('GetName: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  getNames(): Observable<IName[]> {
    this.spinnerService.show();
    return this.http
      .get(this.apiUrl)
      .map((res: Response) => <IName[]>res.json()) // .map is Observable
      .do(data => console.log('GetNames: ' + JSON.stringify(data)))
      .catch(this.handleError)
      .finally(() => this.spinnerService.hide());
  }
  
  addName(name: IName): Observable<number> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(name);

    this.spinnerService.show();
    return this.http.post(this.apiUrl, body, options)
      .map((res: Response) => <number>res.json()) // .map is Observable
      .do(data => console.log('AddName: ' + JSON.stringify(data)))
      .catch(this.handleError)
      .finally(() => this.spinnerService.hide());
  }

  updateName(name: IName): Observable<number> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(name);

    this.spinnerService.show();
    return this.http.put(this.apiUrl + "/" + name.id, body, options)
      .map((res: Response) => <number>res.json()) // .map is Observable
      .do(data => console.log('UpdateName: ' + JSON.stringify(data)))
      .catch(this.handleError)
      .finally(() => this.spinnerService.hide());
  }

  deleteName(id: number): Observable<boolean> {
    this.spinnerService.show();
    return this.http.delete(this.apiUrl + "/" + id)
      .map((res: Response) => <boolean>res.json()) // .map is Observable
      .do(data => console.log('DeleteName: ' + JSON.stringify(data)))
      .catch(this.handleError)
      .finally(() => this.spinnerService.hide());
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

