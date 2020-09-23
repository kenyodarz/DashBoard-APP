import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'join',
})
export class JoinPipe implements PipeTransform {
  transform(array: any[], field: string, separator: string): any {
    if (array) {
      return _.map(array, field).join(separator);
    }

    return '';
  }
}
