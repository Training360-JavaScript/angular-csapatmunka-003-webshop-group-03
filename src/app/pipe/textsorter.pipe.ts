import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textsorter'
})
export class TextsorterPipe implements PipeTransform {

  transform(text: string | null, prefix: number): string | null {
    if (!prefix || prefix === 0) return text;
    if (typeof(text) != 'string') return text;
    // if (/^\d{4}-.*/.test(text)) return text;  // a 'stock' kulcsban dátum van string-ként
    if (String(text).length < prefix) return text;

    // Az utolsó szót nem vágja le.
    return `${String(text).slice(0, prefix).split(' ').slice(0,-1).join(' ')}...`;

    // Az utolsó szót is elvágja.
    // return `${String(text).slice(0, prefix)}...`;

  }

}

// ## Ennek a pipe-nek a feladata, hogy a neki adott szöveget a paraméterrel megadott
//    hosszúságúra vágja, és az új szöveghez hozzátesz '...'-ot.
//    Csak egész szavakat hagy meg, az utolsó vágandó szót is törli.
//
//    Használata: | textsorter:170



//  Például a 'cat01.component.html' 4. szoránál
//
// <p> {{ categoryDetails.description }} </p>
//
// kell kiegészíteni így:
//
// <p> {{ categoryDetails.description | textsorter:170}} </p>
