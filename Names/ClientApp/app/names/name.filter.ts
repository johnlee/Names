import { PipeTransform, Pipe } from '@angular/core';
import { IName } from './name.model';

@Pipe({ // Decorator for the ProductFilterPipe
  name: 'nameFilter'
})
export class NameFilter implements PipeTransform {

  transform(value: IName[], filterBy: string): IName[] {
    filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
    return filterBy ? value.filter((name: IName) =>
      name.name.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
  }
}
