import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/subscription';

import { IName } from './name.model';
import { NameService } from './name.service';
import { NameFilterService } from './name-filter.service';
import { NameFilterComponent } from './name-filter.component';

@Component({
  selector: 'name-list',
  template: require('./name-list.component.html'),
  styles: [require('./name-list.component.css')],
  providers: [NameService]
})
export class NameListComponent implements OnInit {
  filteredNames: IName[];
  names: IName[];
  name: IName;
  nameblock: string;
  error: string;
  showAddForm: boolean = false;
  showAddFormQuick: boolean = true;

  constructor(private nameService: NameService, private filterService: NameFilterService) { }

  ngOnInit(): void { // from OnInit interface
    this.nameService.getNames()
      .subscribe(
      names => {
        this.names = names;
        this.filteredNames = names;
      }, // This is like a promise - triggered when service responds with result
      error => this.error = <any>error);

    this.filteredNames = this.names;
    this.clearAddForm();
  }

  toggleAddForm(): void {
    this.showAddForm = !this.showAddForm;
  }

  toggleAddQuick(): void {
    this.showAddFormQuick = !this.showAddFormQuick;
  }

  saveAddForm(): void {
    // Determine which form to save from
    if (this.showAddFormQuick) {
      let splittedString = this.nameblock.split("\n");
      this.name.name = splittedString[0];
      this.name.tags = splittedString[1] ? splittedString[1].split(",") : [];
      this.name.features = splittedString[2] ? splittedString[2].split(",") : [];
    }
    // Trim the tags and features fields
    let tags = this.name.tags.toString();
    let features = this.name.features.toString();
    this.name.tags = tags.split(",").map(Function.prototype.call, String.prototype.trim);
    this.name.features = features.split(",").map(Function.prototype.call, String.prototype.trim);

    this.nameService.addName(this.name).subscribe(s => {
      this.names.push(this.name);
      this.clearAddForm();
      this.toggleAddForm();
    },
      error => this.error = <any>error
    );
  }

  filterChanged(searchText: string) {
    this.filteredNames = this.filterService.filter(searchText, ['name', 'tags', 'features'], this.names);
  }

  private clearAddForm(): void {
    this.name = {
      id: 0,
      url: "",
      name: "",
      tags: [],
      features: []
    };
    this.nameblock = "";
  }
}
