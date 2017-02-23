import { NgModule } from '@angular/core';
import { UniversalModule } from 'angular2-universal';

import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './navmenu/navmenu.component';

@NgModule({
  imports: [
    UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    NavMenuComponent,
    RoutingComponents
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
