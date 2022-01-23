import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/model/category';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-cat07',
  templateUrl: './cat07.component.html',
  styleUrls: ['./cat07.component.scss']
})
export class Cat07Component implements OnInit {

  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
  }

  categoryName: string = "Fantasy"

  keyword: string = ''

  //Az adott kategória adatai
  categoryDetails: Category =
    {
      "id": 7,
      "name": "Fantasy",
      "description": "The fantasy genre is defined by both circumstance and setting inside a fictional universe with an unrealistic set of natural laws. The possibilities of fantasy are nearly endless, but the movies will often be inspired by or incorporate human myths. The genre often adheres to general human psychology and societal behavior while incorporating non-scientific concepts like magic, mythical creatures, and supernatural elements.",
    }

  //= this.categoryService.getCategoryDetailes(this.categoryName);

  // A product tömb kategóriával szűrt tartalma. A szűrési változó a kategória neve.
  listOfCategorizedProducts: Product[] = this.productService.getCategorized(this.categoryDetails.name);
}
