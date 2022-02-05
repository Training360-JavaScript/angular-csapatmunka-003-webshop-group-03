import { Component, OnInit } from '@angular/core';
import { Observable, reduce } from 'rxjs';
// import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms'

import { Category } from 'src/app/model/category';
import { Product } from 'src/app/model/product';
import { CategoryService } from 'src/app/service/category.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-testpage',
  templateUrl: './testpage.component.html',
  styleUrls: ['./testpage.component.scss']
})
export class TestpageComponent implements OnInit {

  // allCategory: Category[] = this.categoryService.getAllCategory();
  allCategory$: Observable<Category[]> = this.categoryService.getAllCategory();

  // allCategoryName: string[] = this.categoryService.getAllCategoryName();
  // allCategoryName: any = this.categoryService.getAllCategory().subscribe(
  //   data => this.allCategoryName = data
  // );
  allCategoryName: any;

  //allProduct: Product[] = this.productService.getAll();
  allProduct$: Observable<Product[]> = this.productService.getAll();

  oneProduct$: Observable<Product> = this.productService.get(3);


  //allProductInSameCategory = this.productService.getByCategory(5); // nem működik még

  allProductKeys = Object.keys(new Product);

  // A megjelenítendő oszlopok tartalma a Product kulcsai szerint szűrve.
  // A oszlopk a beírt sorrendben jelennek meg.
  columns: string[] = ['id', 'name', 'price', 'stock', 'featured', 'catId'];

  // keys: string[] = Object.keys( new Product() ).filter( k => this.columns.includes(k) );

  keys: string[] = this.columns.filter(key => Object.keys(new Product()).includes(key));

  columnKey: string = ''; // kiválasztott oszlophoz tartozó objektumkulcs

  sortDirection: string = 'A...Z';

  // data: any;

  keyword: string = '';



  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
  ) { }


  /* getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  */
  /*
  getAllCategoryName(): string[] {
    const key = 'name';
    return this.listOfCategory.map( item => item[key]);
   } */

  // ----------------------------------------------
  _categoryDetails: Category =
    {
      "id": 1,
      "name": "Action",
      "description": "Movies in the action genre are defined by risk and stakes. While many movies may feature an action sequence, to be appropriately categorized inside the action genre, the bulk of the content must be action-oriented, including fight scenes, stunts, car chases, and general danger.",
    }



  // array: any = getAllCategoryByKey();

  // getAllCategoryByKey(key: string = 'name'): any {
  //   this.allCategory$.subscribe(
  //     data => {
  //       //const key = 'name';
  //       let arr = data.map(item => {
  //         return item[key]
  //       });
  //       console.log(arr);
  //       this.array = arr;
  //       return arr;
  //     }
  //     )
  //   }



  categoryDetails: any = 'kategória leírása'

  getCategoryDetails(name: string): void {
    this.allCategory$.subscribe(
      data => {
        this.categoryDetails = data.filter(item => item.name === name)[0];
      }
    )
  }

  //catDetails=this.categoryService.gCategoryDetails('Drama')
  // catDetails=this.categoryService.gCategoryDetails('Crime').this.service.function
  //   .subscribe(arg => this.property = arg);

  //catDetails: any = 'safg';
  catDetails = 'df'




  ngOnInit(): void {
    this.getCategoryDetails('Drama');

    //this.catDetails = this.categoryService.gCategoryDetails('Crime')

    // this.allCategory$.subscribe(
    //   data => {
    //     console.log(data[1].name);
    //     this.categoryDetails = data.filter(item => item.name === 'Action')[0].description;
    //   }
    // )

    //this.getAllCategoryByKey()
    /* this.allCategory$.subscribe(
      //data => this.allCategoryName = JSON.parse(data)
      data => this.array = JSON.parse(data)
    )
 */
  }

  // Táblázat fejlécére kattintáskor ABC-sorrendbe rendez a kívánt oszlop szerint.
  // Az ABC-sorrend megfordul azonos oszlopfejlésre kattintás után: 'A...B' <=> 'Z...A'
  clickCounter: number = 0;

  _onColumnSelect(key: string): void {
    (key === this.columnKey) ? this.clickCounter++ : this.clickCounter = 0;
    // console.log(this.clickCounter) ;
    this.sortDirection = (this.clickCounter % 2) ? 'Z...A' : 'A...Z';
    // console.log(this.sortDirection);
    this.columnKey = key;
  }
  // ----------------



  proba = this.categoryService.getAllCategory();

  selectedCategoryName: string = '';



  formDisabler: boolean = true;

  product$: Observable<Product> = this.productService.get(3);

  onEdit(): void {
    this.formDisabler = !this.formDisabler;
  }












  result: number[] = [];
  arr: number[] = [];
  dataCopy() {
    for (let i = 0; i < 100; i++) {
      this.arr.push(i + 1);
    }
    console.log(this.arr);
    this.allProduct$.subscribe(
      data => {
        console.log(data)
        for (let i: number = 0; i < data.length; i++) {
          this.result.push(data[i].id);
        }
        console.log(this.result)
        console.log(this.arr.filter(er => !this.result.includes(er)))
      }
    )
  }



  // ----------------

  icon: number = 0;
  // A táblázat/lista sorbarendezéséhez:
  //columnKey: string = '';
  //sortDirection: string = 'A...Z';
  //clickCounter: number = 0;
  onColumnSelect(key: string): void {
    (key === this.columnKey) ? this.clickCounter++ : this.clickCounter = 0;
    this.sortDirection = (this.clickCounter % 2) ? 'Z...A' : 'A...Z';
    this.columnKey = key;

    if (key === 'id') this.icon = (this.sortDirection === 'A...Z') ? 1 : 2;
    if (key === 'name') this.icon = (this.sortDirection === 'A...Z') ? 3 : 4;
    if (key === 'stock') this.icon = (this.sortDirection === 'A...Z') ? 5 : 6;
    if (key === 'price') this.icon = (this.sortDirection === 'A...Z') ? 7 : 8;

  }

  filterKey: string = 'name';
  phrase: string = '';






}
