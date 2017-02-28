import { NgModule } from '@angular/core';
import { UniversalModule } from 'angular2-universal';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NameDetailComponent } from './name-detail.component';
import { NameListComponent } from './name-list.component';
import { NameService } from './name.service';
import { NameFilter } from './name.filter';
import { NameGuard } from './name.guard';

@NgModule({
  imports: [ // import modules
    UniversalModule,
    FormsModule,
    RouterModule.forChild([ // this is forChild, not forRoot, since not root module
      {
        path: 'Home',
        component: NameListComponent
      },
      {
        path: 'Home/:id',
        canActivate: [NameGuard], // Router Guard
        component: NameDetailComponent
      }
    ])
  ],
  declarations: [ // components and filters
    NameListComponent,
    NameDetailComponent,
    NameFilter
  ],
  providers: [ // service providers
    NameService,
    NameGuard // Guard service
  ]
})
export class NameModule { }
