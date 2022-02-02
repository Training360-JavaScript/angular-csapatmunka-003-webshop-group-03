import { CategoryService } from './../../service/category.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
  }

  categoryName: string = "Crime"
  //= this.categoryService.getCategoryDetailes(this.categoryName);
  keyword: string = ''


  categoryDetails: Category =
    {
      "id": 3,
      "name": "Crime",
      "description": "The crime genre deals with both sides of the criminal justice system but does not focus on legislative matters or civil suits and legal actions. The best crime movies often occupy moral gray areas where heroes and villains are much harder to define. Many of Martin Scorsese's best movies or Quentin Tarantino's movies fall within the crime genre.",
    }

  allProduct$: Observable<Product[]> = this.productService.getAll();

}
