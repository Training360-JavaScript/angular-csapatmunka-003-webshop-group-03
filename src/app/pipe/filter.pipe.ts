import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe<T extends {[key: string]: any}> implements PipeTransform {

  transform(value: T[] | null, phrase: string = '', key: string = ''): T[] | null {
    if (!Array.isArray(value) || !phrase) {
      return value;
    }

    // console.log('phrase: ', phrase, '   key: ', key, ' value: ', value);

    phrase = phrase.toLowerCase();

    if (!key) {
      return value.filter(
        item => Object.values(item).join('').toLowerCase().includes(phrase)
      );
    }

    // Ez az egész kifejezésben keres, az egyezés a kifejezésen belül bárhol lehet.
    return value.filter( item => {
      const data = String(item[key]).toLowerCase();
      return data.includes(phrase);
    });

    // Az egyezést a kifejezés elejéről keresi.
    // Nem ad találatot, ha egyezés a kifejezésen belül lenne.
    /* return value.filter( item => {
      const data = String(item[key]).slice(0, phrase.length).toLowerCase();
      // console.log(data);
      return data.includes(phrase);
    }); */

  }

}
