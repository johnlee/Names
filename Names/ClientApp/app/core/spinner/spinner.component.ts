import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { SpinnerState, SpinnerService } from './spinner.service';

@Component({
  selector: 'spinner',
  template: require('./spinner.component.html'),
  styles: [require('./spinner.component.css')],
})
export class SpinnerComponent implements OnDestroy, OnInit {
  visible = false;

  // Subscribe to the spinner state in SpinnerService, this sets the visible flag
  private spinnerStateChanged: Subscription;

  constructor(private spinnerService: SpinnerService) { }

  ngOnInit() {
    this.spinnerStateChanged = this.spinnerService.spinnerState
      .subscribe((state: SpinnerState) => this.visible = state.show);
  }

  ngOnDestroy() {
    this.spinnerStateChanged.unsubscribe();
  }
}
