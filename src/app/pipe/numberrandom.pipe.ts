import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'numberrandom'
})
export class NumberrandomPipe<T> implements PipeTransform {
  transform(value: T[] | null, numberOfItems: number = 5): T[] | null {
    if (!Array.isArray(value) || !numberOfItems) {
      return value;
    }

    // Ha a bejövő tömb hossza kisebb, mint amennyi elemű tömböt kérünk, akkor változatlanul továbbadja az eredeti tömböt.
    if (value.length < numberOfItems) return value;

    const arrRanNum = Array(numberOfItems).fill(null);

    // Véletlen egész szám generálás: '0...numberOfItems - 1' Alapértelmezetten: 0...4;
    const randomNumber = (max = value.length) => {
      return Math.floor(Math.random() * max);
    }
    // Véletlenszámok 'arrRanNum' tömbjének feltöltése. Nincs benne ismétlődés.
    for (let i = 0; i < arrRanNum.length; i++) {
      const instant = randomNumber();
      (arrRanNum.includes(instant)) ? i-- : arrRanNum[i] = instant;
    }
    // Az 'arrRanNum' véletlen számokat tartalmazó tömb értékeit az objektumokat tartalmazó
    // 'value: T[]' input tömb idexeként használva véletlen objektumokkal feltöltött tömböt ad.
    const resultArray = Array(numberOfItems).fill(null);
    resultArray.map((v, i, arr) => arr[i] = value[arrRanNum[i]]);
    // console.log(arrRanNum);
    // console.log(resultArray);
    return resultArray;
  }