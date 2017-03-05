import { NgModule } from '@angular/core';
import { UniversalModule } from 'angular2-universal';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NameDetailComponent } from './name-detail.component';
import { NameListComponent } from './name-list.component';
import { NameService } from './name.service';
import { NameGuard } from './name.guard';
import { NameFilterService } from './name-filter.service';
import { NameFilterComponent } from './name-filter.component';

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
    NameFilterComponent
  ],
  providers: [ // service providers
    NameService,
    NameFilterService,
    NameGuard // Guard service
  ]
})
export class NameModule { }
