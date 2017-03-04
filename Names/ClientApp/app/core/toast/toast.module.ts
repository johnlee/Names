import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { throwIfAlreadyLoaded } from '../module-import-guard';
import { ToastComponent } from './toast.component';
import { ToastService } from './toast.service';

@NgModule({
  imports: [CommonModule],
  exports: [ToastComponent],
  declarations: [ToastComponent],
  providers: [ToastService] // Makes the ToastService available for injection
})
export class ToastModule {

  // Only load this module if not already loaded
  constructor( @Optional() @SkipSelf() parentModule: ToastModule) {
    throwIfAlreadyLoaded(parentModule, 'ToastModule')
  }
}
