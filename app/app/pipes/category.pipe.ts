
import { Pipe, PipeTransform } from '@angular/core';
import { Item, Category } from '../model/app.model';

@Pipe({
  name: 'byCategory'
})
export class CategoryPipe implements PipeTransform {
  transform(items: Item[], filter: Category): any {
    if (!items || !filter) {
      return items;
    }

    return items.filter(item => item.category == filter);
  }
}
