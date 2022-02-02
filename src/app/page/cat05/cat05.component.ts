import { CategoryService } from './../../service/category.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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

  categoryName: string = "Comedy"
  //= this.categoryService.getCategoryDetailes(this.categoryName);

  keyword: string = ''

  categoryDetails: Category = new Category();
  // categoryDetails: Category =
  //   {
  //     "id": 5,
  //     "name": "Comedy",
  //     "description": "The comedy genre is defined by events that are intended to make someone laugh, no matter if the story is macabre, droll, or zany. Comedy can be found in most movies, but if the majority of the film is intended to be a comedy you may safely place it in this genre. The best comedy movies range throughout this entire spectrum of humor.",
  //   }

  allProduct$: Observable<Product[]> = this.productService.getAll();
}
