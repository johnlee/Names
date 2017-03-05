import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'name-filter',
  template: require('./name-filter.component.html')
})
export class NameFilterComponent {
  @Output() changed: EventEmitter<string>;

  filter: string;

  constructor() {
    this.changed = new EventEmitter<string>();
  }

  clear() {
    this.filter = '';
  }

  filterChanged(event: any) {
    event.preventDefault();
    this.changed.emit(this.filter);
  }
}