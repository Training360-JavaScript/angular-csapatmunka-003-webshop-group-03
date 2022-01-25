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

  sortDirection: boolean = false;

  data: any;


    constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
  }



  onColumnSelect(key: string): void {
    if (key === this.columnKey) console.log('Egyezés');
    console.log('előző: ' + this.columnKey);

    this.columnKey = key;

    console.log('jelenlegi: ' + key);
  }


  // show():void {
  //   console.log('lkj');
  // }

  // adat = this.show();




}
