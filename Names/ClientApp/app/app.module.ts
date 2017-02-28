import { NgModule } from '@angular/core';
import { UniversalModule } from 'angular2-universal';
import { Routes, RouterModule } from '@angular/router';

import { NameModule } from './names/name.module';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './navmenu/navmenu.component';

@NgModule({
  imports: [
    UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
    NameModule,
    RouterModule.forRoot([
      {
        path: 'Home',
        loadChildren: './names/name.module#NameModule'
      },
      {
        path: 'About',
        component: AboutComponent
      },
      {
        path: '',
        redirectTo: 'Home',
        pathMatch: 'full'
      }, // generic redirect 
      {
        path: '**',
        redirectTo: 'Home',
        pathMatch: 'full'
      } // anything not match redirect 
    ]),
  ],
  declarations: [
    AppComponent,
    NavMenuComponent,
    AboutComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
