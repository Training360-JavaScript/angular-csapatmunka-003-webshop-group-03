import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/model/category';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-cat05',
  templateUrl: './cat05.component.html',
  styleUrls: ['./cat05.component.scss']
})
export class Cat05Component implements OnInit {

  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
  }

  categoryName: string = "Comedy"

  keyword: string = ''

  //Az adott kategória adatai
  categoryDetails: Category =
    {
      "id": 5,
      "name": "Comedy",
      "description": "The comedy genre is defined by events that are intended to make someone laugh, no matter if the story is macabre, droll, or zany. Comedy can be found in most movies, but if the majority of the film is intended to be a comedy you may safely place it in this genre. The best comedy movies range throughout this entire spectrum of humor.",
    }

  //= this.categoryService.getCategoryDetailes(this.categoryName);

  // A product tömb kategóriával szűrt tartalma. A szűrési változó a kategória neve.
  listOfCategorizedProducts: Product[] = this.productService.getCategorized(this.categoryDetails.name);

}
