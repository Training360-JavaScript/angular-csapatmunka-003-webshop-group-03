import { Component, OnInit } from '@angular/core';
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

  allCategory: Category[] = this.categoryService.getAllCategory();

  allCategoryName: string[] = this.categoryService.getAllCategoryName();

  allProduct: Product[] = this.productService.getAll();


  allProductKeys = Object.keys(new Product);

  // A megjelenítendő oszlopok tartalma a Product kulcsai szerint szűrve.
  // A oszlopk a beírt sorrendben jelennek meg.
  columns: string[] = ['id', 'name', 'price', 'stock', 'featured', 'catId'];

  // keys: string[] = Object.keys( new Product() ).filter( k => this.columns.includes(k) );

  keys: string[] = this.columns.filter( key => Object.keys( new Product() ).includes(key) );

  columnKey: string = ''; // kiválasztott oszlophoz tartozó objektumkulcs

  sortDirection: string = 'A...Z';

  // data: any;

  keyword: string = '';


    constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
  }

  // Táblázat fejlécére kattintáskor ABC-sorrendbe rendez a kívánt oszlop szerint.
  // Az ABC-sorrend megfordul azonos oszlopfejlésre kattintás után: 'A...B' <=> 'Z...A'
  clickCounter: number = 0;

  onColumnSelect(key: string): void {
    (key === this.columnKey) ? this.clickCounter++ : this.clickCounter = 0;
    // console.log(this.clickCounter) ;
    this.sortDirection = ( this.clickCounter % 2) ? 'Z...A' : 'A...Z';
    // console.log(this.sortDirection);
    this.columnKey = key;
  }
  // ----------------







}
