import { CategoryService } from './../../service/category.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/model/category';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-cat01',
  templateUrl: './cat01.component.html',
  styleUrls: ['./cat01.component.scss']
})
export class Cat01Component implements OnInit {

  categoryDetails: Category = new Category()
  // categoryDetails: Category =
  //   {
  //     "id": 1,
  //     "name": "Action",
  //     "description": "Movies in the action genre are defined by risk and stakes. While many movies may feature an action sequence, to be appropriately categorized inside the action genre, the bulk of the content must be action-oriented, including fight scenes, stunts, car chases, and general danger.",
  //   }

    categoryName: string = "Action"
    //listOfCategorizedProducts: Product[] = this.productService.getCategorized(this.categoryDetails.name);

    keyword: string = ''

    allProduct$: Observable<Product[]> = this.productService.getAll();

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService
  ) {
  }


  ngOnInit(): void {
    this.getCategoryDetails(this.categoryName);
    //this.categoryDetails = this.categoryService.getCategoryDetailes(this.categoryName)
    //console.log(this.categoryDetails)
  }

  // A megadott nevű kategória objektumát adja vissza.
  getCategoryDetails(name: string): void {
    this.categoryService.getAllCategory().subscribe(
      data => {
        this.categoryDetails = data.filter(item => item.name === name)[0];
      }
    )
  }

  // A táblázat/lista sorbarendezéséhez:
  columnKey: string = '';
  sortDirection: string = 'A...Z';
  clickCounter: number = 0;
  onColumnSelect(key: string): void {
    (key === this.columnKey) ? this.clickCounter++ : this.clickCounter = 0;
    this.sortDirection = (this.clickCounter % 2) ? 'Z...A' : 'A...Z';
    this.columnKey = key;
  }


}
