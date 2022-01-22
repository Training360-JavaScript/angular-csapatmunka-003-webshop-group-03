import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/model/category';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-cat03',
  templateUrl: './cat03.component.html',
  styleUrls: ['./cat03.component.scss']
})
export class Cat03Component implements OnInit {

  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
  }

  categoryName: string = "Crime"

  //Az adott kategória adatai
  categoryDetails: Category =
    {
      "id": 3,
      "name": "Crime",
      "description": "The crime genre deals with both sides of the criminal justice system but does not focus on legislative matters or civil suits and legal actions. The best crime movies often occupy moral gray areas where heroes and villains are much harder to define. Many of Martin Scorsese's best movies or Quentin Tarantino's movies fall within the crime genre.",
    }

  //= this.categoryService.getCategoryDetailes(this.categoryName);

  // A product tömb kategóriával szűrt tartalma. A szűrési változó a kategória neve.
  listOfCategorizedProducts: Product[] = this.productService.getCategorized(this.categoryDetails.name);

}
