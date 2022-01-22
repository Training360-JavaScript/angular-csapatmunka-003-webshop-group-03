import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/model/category';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-cat02',
  templateUrl: './cat02.component.html',
  styleUrls: ['./cat02.component.scss']
})
export class Cat02Component implements OnInit {

  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
  }

  categoryName: string = "Animation"

  keyword: string = ''

  //Az adott kategória adatai
  categoryDetails: Category =
    {
      "id": 2,
      "name": "Animation",
      "description": "The animation genre is defined by inanimate objects being manipulated to appear as though they are living. This can be done in many different ways and can incorporate any other genre and sub-genre on this list. For more info on animation, you can dive deeper on the types of animation or see our list of the best animated movies of all time.",
    }

  //= this.categoryService.getCategoryDetailes(this.categoryName);

  // A product tömb kategóriával szűrt tartalma. A szűrési változó a kategória neve.
  listOfCategorizedProducts: Product[] = this.productService.getCategorized(this.categoryDetails.name);

}
