import { Injectable } from '@angular/core';
import { categoriesOfList } from '../database/mock-category';
import { Category } from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  // Külső adatbáziban lévő category-tömb.
  listOfCategory: Category[] = categoriesOfList;

  constructor() { }

  // A 'getAllCategory()' metódus továbbküldi a teljes category tömböt annak, aki azt meghívja.
  getAllCategory(): Category[] {
    return this.listOfCategory;
  }

  // A kategóriák nevét tartalmazó tömböt adja vissza.
  // pl.: [ "Action", "Animation", "Crime", "Drama", "Comedy", "Romance", "Fantasy", "Sci-fi", "Horror" ]
  getAllCategoryName(): string[] {
    const key = 'name';
    return this.listOfCategory.map( item => item[key]);
  }


  // A 'getCategoryDetailes()' a paraméterként megadott kategórinévhez tartozó kategória objektumával tér vissza.
  // Az objektumból elérhetőek a kulcsok értékei:
  // Használata:
  //  categoryDetails = this.categoryService.getCategoryDetailes('Horror');
  //  ...             = this.categoryService.getCategoryDetailes('Horror').id;
  //  ...             = this.categoryService.getCategoryDetailes('Horror').name;
  //  ...             = this.categoryService.getCategoryDetailes('Horror').description;
  getCategoryDetailes(categoryName: string = ''): Category | any {
    if (!categoryName) return null;

    categoryName = categoryName.toLowerCase();
    const key = 'name';

    return this.listOfCategory.filter( item => item[key].toLowerCase() === categoryName )[0];
  }
}
