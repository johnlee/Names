import { Injectable, Optional, SkipSelf } from '@angular/core';
import { Subject } from 'rxjs/Subject';

export interface SpinnerState {
  show: boolean;
}

@Injectable()
export class SpinnerService {
  private spinnerSubject = new Subject<SpinnerState>();

  spinnerState = this.spinnerSubject.asObservable();

  constructor( @Optional() @SkipSelf() prior: SpinnerService) {
    if (prior) { return prior; }
  }

  show() { // Sets the spinner state to true
    this.spinnerSubject.next(<SpinnerState>{ show: true });
  }

  hide() { // Sets the spinner state to false
    this.spinnerSubject.next(<SpinnerState>{ show: false });
  }
}
