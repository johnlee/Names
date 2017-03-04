import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/subscription';

import { IName } from './name.model';
import { NameService } from './name.service';

@Component({
  selector: 'name-detail',
  template: require('./name-detail.component.html'),
  styles: [require('./name-detail.component.css')],
  providers: [NameService]
})
export class NameDetailComponent implements OnInit, OnDestroy {
  private sub: Subscription;
  name: IName;
  error: string;
  showModal: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private nameService: NameService
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(
      params => {
        let id = +params['id'];
        this.getName(id);
      });
    this.showModal = false;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getName(id: number) {
    this.nameService.getName(id)
      .subscribe(
        name => this.name = name,
        error => this.error = <any>error
      );
  }

  updateName(): void {
    // Convert tags and features to string array
    let tags = this.name.tags.toString();
    let features = this.name.features.toString();
    this.name.tags = tags.split(",").map(Function.prototype.call, String.prototype.trim);
    this.name.features = features.split(",").map(Function.prototype.call, String.prototype.trim);

    // Call the name update service
    this.nameService.updateName(this.name)
      .subscribe(
      success => {
        if (success != this.name.id) {
          console.log("ERROR - recieved different name id after update call");
        }
        this.router.navigate(['/Home']);
      },
      error => {
        this.error = <any>error;
      });
  } 

  toggleModal(): void {
    this.showModal = !this.showModal;
  }

  deleteName(): void {
    this.nameService.deleteName(this.name.id)
      .subscribe(
      success => {
        if (!success) {
          console.log("ERROR - recieved false result after deletion call");
        }
        this.router.navigate(['/Home']);
      },
      error => {
        this.error = <any>error;
      });
  }
}
