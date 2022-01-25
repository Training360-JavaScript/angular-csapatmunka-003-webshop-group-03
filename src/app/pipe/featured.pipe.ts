import { Product } from './../model/product';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'featured'
})
export class FeaturedPipe implements PipeTransform {

  transform(value: Product[], prefix: string): Product[] {
    if (!['true', 'false'].includes(prefix)) {
      console.log('Hibás vagy hiányzó frefix megadás. Csak true vagy false lehet!');
    }

    if (!Array.isArray(value) || !prefix || !['true', 'false'].includes(prefix)) {
      return value;
    }

    let featuresBoolean: boolean;
    if (prefix === 'true') featuresBoolean = true;
    if (prefix === 'false') featuresBoolean = false;

    return value.filter( item => item.featured === featuresBoolean);
  }
}

// ## Ez a pipe az inputként kapott 'value: Product[]' tömböl azokat adja tovább (szűrí),
//    ahol a tömb egyes objektumainek 'featured' kulcsának értéke a pipe frefix-eként
//    megadott 'true' vagy 'false'.
//    Prefix megadás nélkül, vagy hibásan megadott prefix-szel (pl: 'truef') az output
//    változatlanul visszadja az input tömböt.

// Használata:  | featured:'true'  vagy  | featured:'false'
