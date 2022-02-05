import { CategoryService } from './../../service/category.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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

    categoryName: string = "Animation"
    //= this.categoryService.getCategoryDetailes(this.categoryName);
    keyword: string = ''

    categoryDetails: Category = new Category();
    // categoryDetails: Category =
    // {
    //   "id": 2,
    //   "name": "Animation",
    //   "description": "The animation genre is defined by inanimate objects being manipulated to appear as though they are living. This can be done in many different ways and can incorporate any other genre and sub-genre on this list. For more info on animation, you can dive deeper on the types of animation or see our list of the best animated movies of all time.",
    // }

    allProduct$: Observable<Product[]> = this.productService.getAll();
}


