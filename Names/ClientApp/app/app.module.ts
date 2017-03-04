import { NgModule } from '@angular/core';
import { UniversalModule } from 'angular2-universal';
import { Routes, RouterModule } from '@angular/router';

import { CoreModule } from './core/core.module';
import { NameModule } from './names/name.module';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
    NameModule,
    CoreModule,
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
    AboutComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
