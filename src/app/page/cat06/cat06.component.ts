import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/model/category';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-cat06',
  templateUrl: './cat06.component.html',
  styleUrls: ['./cat06.component.scss']
})
export class Cat06Component implements OnInit {

  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
  }

  categoryName: string = "Romance"

  keyword: string = ''

  //Az adott kategória adatai
  categoryDetails: Category =
    {
      "id": 6,
      "name": "Romance",
      "description": "The romance genre is defined by intimate relationships. Sometimes these movies can have a darker twist, but the idea is to lean on the natural conflict derived from the pursuit of intimacy and love.",
    }

  //= this.categoryService.getCategoryDetailes(this.categoryName);

  // A product tömb kategóriával szűrt tartalma. A szűrési változó a kategória neve.
  listOfCategorizedProducts: Product[] = this.productService.getCategorized(this.categoryDetails.name);

}
