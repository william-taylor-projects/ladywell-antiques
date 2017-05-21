
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'name'})
export class CategoryPipe implements PipeTransform {
  transform(value: any, exponent: string): any {
    return value;
  }
}
