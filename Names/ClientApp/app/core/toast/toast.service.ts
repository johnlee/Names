import { Injectable, Optional, SkipSelf } from '@angular/core';
import { Subject } from 'rxjs/Subject';

export interface ToastMessage {
  message: string
}

@Injectable()
export class ToastService {
  private toastSubject = new Subject<ToastMessage>();
  toastState = this.toastSubject.asObservable();

  // Creates ToastService if not already exist
  constructor( @Optional() @SkipSelf() prior: ToastService) {
    if (prior) {
      console.log('toast service already exists');
      return prior;
    } else {
      console.log('created toast service')
    }
  }

  // Show the toast message
  activate(message?: string) {
    this.toastSubject.next(<ToastMessage>{ message: message });
  }
}
