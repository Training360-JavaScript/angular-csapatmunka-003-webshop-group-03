import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

import { categoriesOfList } from '../database/mock-category';
import { Category } from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  // Külső adatbáziban lévő category-tömb.
  //listOfCategory: Category[] = categoriesOfList;

  apiUrl: string = environment.apiUrl;
  endPoint: string = 'category';

  constructor(
    private http: HttpClient
  ) {
  }


  // // A 'getAllCategory()' metódus továbbküldi a teljes category tömböt annak, aki azt meghívja.
  //  getAllCategory(): Category[] {
  //    return this.listOfCategory;  // database-ből veszi az adatokat, json-server működése előtti változat
  //  }

  handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }

  //listOfCategory: Category[] = categoriesOfList;

  listOfCategory: any = this.getAllCategory().subscribe(
    data => this.listOfCategory = data
  )

  getAllCategory(): Observable<Category[]> {
    return this.http.get<any>(`${this.apiUrl}${this.endPoint}`)
      .pipe(
        catchError(this.handleError('getAllCategory',[]))
      )
  }

  getCategoryDetailes(categoryName: string = ''): Category | any {
    if (!categoryName) return null;

    categoryName = categoryName.toLowerCase();
    const key = 'name';

    return this.listOfCategory.filter( (item:any) => item[key].toLowerCase() === categoryName )[0];
  }

  // A kategóriák nevét tartalmazó tömböt adja vissza.
  // pl.: [ "Action", "Animation", "Crime", "Drama", "Comedy", "Romance", "Fantasy", "Sci-fi", "Horror" ]
  /* _getAllCategoryName(): string[] {
    const key = 'name';
    //return this.listOfCategory.map( item => item[key]);
    return 'df'
  } */


  // A 'getCategoryDetailes()' a paraméterként megadott kategórinévhez tartozó kategória objektumával tér vissza.
  // Az objektumból elérhetőek a kulcsok értékei:
  // Használata:
  //  categoryDetails = this.categoryService.getCategoryDetailes('Horror');
  //  ...             = this.categoryService.getCategoryDetailes('Horror').id;
  //  ...             = this.categoryService.getCategoryDetailes('Horror').name;
  //  ...             = this.categoryService.getCategoryDetailes('Horror').description;
  /* getCategoryDetailes(categoryName: string = ''): Category | any {
    if (!categoryName) return null;

    categoryName = categoryName.toLowerCase();
    const key = 'name';

    return this.listOfCategory.filter( item => item[key].toLowerCase() === categoryName )[0];
  }
  */
}
