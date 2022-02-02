import { CategoryService } from './../../service/category.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/model/category';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-cat04',
  templateUrl: './cat04.component.html',
  styleUrls: ['./cat04.component.scss']
})
export class Cat04Component implements OnInit {

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

  categoryName: string = "Drama"
  //= this.categoryService.getCategoryDetailes(this.categoryName);

  keyword: string = ''

  categoryDetails: Category = new Category();
    // categoryDetails: Category =
    // {
    //   "id": 4,
    //   "name": "Drama",
    //   "description": "The drama genre is defined by conflict and often looks to reality rather than sensationalism. Emotions and intense situations are the focus, but where other genres might use unique or exciting moments to create a feeling, movies in the drama genre focus on common occurrences. Drama is a very broad category and untethered to any era — from movies based on Shakespeare to contemporary narratives.",
    // }

  allProduct$: Observable<Product[]> = this.productService.getAll();

}
