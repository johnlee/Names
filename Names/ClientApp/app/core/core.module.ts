import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import './rxjs-extensions';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { ExceptionService } from './exception.service';
import { NavMenuComponent } from './navmenu/navmenu.component';
import { SpinnerModule } from './spinner/spinner.module';
import { ToastModule } from './toast/toast.module';

// This module imports core modules that should be used across the entire application
// These are singleton modules, guarded by the throwIfAlreadyLoaded function 
@NgModule({
  imports: [
    CommonModule, FormsModule, RouterModule,
    SpinnerModule, ToastModule
  ],
  exports: [
    CommonModule, FormsModule, RouterModule,
    SpinnerModule, ToastModule, NavMenuComponent
  ],
  declarations: [NavMenuComponent],
  providers: [
    ExceptionService
  ]
})
export class CoreModule {

  // Loads this module only if not already loaded
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
