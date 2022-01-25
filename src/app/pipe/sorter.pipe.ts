import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorter'
})
export class SorterPipe implements PipeTransform {

  transform(value: any[], key: string): any[] {
    if (!Array.isArray(value) || !key) return value;


    //console.log(value[6][key]);

    /* if (value[0][key] > value[value.length-1][key]) {
      console.log('a..z')
    } */

    return value.sort((a, b) => {
      if (typeof (a[key]) === 'number' && typeof (b[key]) === 'number') {
        return a[key] - b[key];
      }
      const dataA = String(a[key]).toLowerCase();
      const dataB = String(b[key]).toLowerCase();
      return dataA.localeCompare(dataB);
    });

  }

}
