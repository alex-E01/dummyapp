import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'viewproduct'
})
export class ViewproductPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
