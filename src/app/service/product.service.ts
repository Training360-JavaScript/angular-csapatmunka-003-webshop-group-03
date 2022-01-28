import { HttpClient } from '@angular/common/http';
import { Injectable, Pipe } from '@angular/core';
import { filter, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { categoriesOfList } from '../database/mock-category';
import { productsOfList } from '../database/mock-product';
import { Category } from '../model/category';
import { Product } from '../model/product';
import { CategoryService } from './category.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl: string = environment.apiUrl;
  endPoint: string = 'product';

  // Külső adatbázisban lévő product-tömb, vagyis a filmadatok teljes állománya.
  //list: Product[] = productsOfList;
  _list:any;
  // Külső adatbáziban lévő category-tömb.
  //listCategory: any;

  listCategory: any = this.categoryService.getAllCategory().subscribe(
    data => this._list = data
  )

  constructor(
    private categoryService: CategoryService,
    private http: HttpClient
  ) { }

  // A 'getAll()' metódus továbbküldi a teljes product tömböt annak, aki azt meghívja.
  // pl. a 'home.component.ts' lekéri, és ő a 'listOfProducts' változóként használja.
  _getAll(): Product[] {
    return this._list;
  }
  //---------




  /*
  getByCategory(catId: number): any {
    return this.getAll()
      .pipe(

        //map(items => items),
        filter(item => item[id] == 1)
      ).subscribe(
        data => console.log(data),

      )

  }
 */

  /*
  // 'category' kulcs alapján szűri a product tömb objektumait.
  // Működik ez is, de átdolgozom inkább ezt a szűrési funkciót pipe-ra.
  _getCategorized(categoryName: string = 'Sci-fi'): any {
    let category: Category[] = this.listCategory.filter( item => item.name === categoryName);
    // console.log(category[0]);
    // console.log(category[0].id);
    return this.list.filter( item => item.catId === category[0].id)
    // return category;
    //return this.list.filter( item => item.catId === catID);
    //return this.list;
  }
//  */
//
// ------------------- idáig törlendő


  // A json-server miatt ezeket használjátok, a többi törölve lesz.


  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}${this.endPoint}`)
  }


  get(id: number): Observable<Product> {
     return this.http.get<Product>(`${this.apiUrl}${this.endPoint}/${id}`)
  }


  update(product: Product): Observable<Product> {
    return this.http.patch<Product>(`${this.apiUrl}${this.endPoint}/${product.id}`, product)
  }


  delete(id: number): Observable<Product> {
    const url = `${this.apiUrl}${this.endPoint}/${id}`;
    return this.http.delete<Product>(url)
  }



}
