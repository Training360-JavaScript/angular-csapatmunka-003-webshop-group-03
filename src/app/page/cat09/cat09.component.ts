import { CategoryService } from './../../service/category.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/model/category';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-cat09',
  templateUrl: './cat09.component.html',
  styleUrls: ['./cat09.component.scss']
})
export class Cat09Component implements OnInit {

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    this.getCategoryDetails(this.categoryName);
  }

   // A megadott nevű kategória objektumát adja vissza.
  getCategoryDetails(name: string): void {
  this.categoryService.getAllCategory().subscribe(
    data => {
      this.categoryDetails = data.filter(item => item.name === name)[0];
    }
  )
  }

  categoryName: string = "Horror"
  //= this.categoryService.getCategoryDetailes(this.categoryName);
  keyword: string = ''

  categoryDetails: Category = new Category();
  // categoryDetails: Category =
  //   {
  //     "id": 9,
  //     "name": "Horror",
  //     "description": "The horror genre is centered upon depicting terrifying or macabre events for the sake of entertainment. A thriller might tease the possibility of a terrible event, whereas a horror film will deliver all throughout the film. The best horror movies are designed to get the heart pumping and to show us a glimpse of the unknown.",
  //   }

  allProduct$: Observable<Product[]> = this.productService.getAll();

}
