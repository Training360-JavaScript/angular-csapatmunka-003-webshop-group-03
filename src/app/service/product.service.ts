import { Injectable } from '@angular/core';
import { categoriesOfList } from '../database/mock-category';
import { productsOfList } from '../database/mock-product';
import { Category } from '../model/category';
import { Product } from '../model/product';
import { CategoryService } from './category.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // Külső adatbázisban lévő product-tömb, vagyis a filmadatok teljes állománya.
  list: Product[] = productsOfList;

  // Külső adatbáziban lévő category-tömb.
  listCategory: Category[] = this.categoryService.getAllCategory();

  constructor(
    private categoryService: CategoryService
  ) { }

  // A 'getAll()' metódus továbbküldi a teljes product tömböt annak, aki azt meghívja.
  // pl. a 'home.component.ts' lekéri, és ő a 'listOfProducts' változóként használja.
  getAll(): Product[] {
    return this.list;
  }

  // 'category' kulcs alapján szűri a product tömb objektumait.
  // Működik ez is, de átdolgozom inkább ezt a szűrési funkciót pipe-ra.
  getCategorized(categoryName: string = 'Sci-fi'): any {
    let category: Category[] = this.listCategory.filter( item => item.name === categoryName);
    console.log(category[0]);
    console.log(category[0].id);
    return this.list.filter( item => item.catId === category[0].id)
    // return category;
    //return this.list.filter( item => item.catId === catID);
    //return this.list;
  }
}
