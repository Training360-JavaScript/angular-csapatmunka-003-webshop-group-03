import { CategoryService } from './../../service/category.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/model/category';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-cat08',
  templateUrl: './cat08.component.html',
  styleUrls: ['./cat08.component.scss']
})
export class Cat08Component implements OnInit {

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
  }

  categoryName: string = "Sci-fi"
  //= this.categoryService.getCategoryDetailes(this.categoryName);
  keyword: string = ''

  categoryDetails: Category =
    {
      "id": 8,
      "name": "Sci-fi",
      "description": "Science fiction movies are defined by a mixture of speculation and science. While fantasy will explain through or make use of magic and mysticism, science fiction will use the changes and trajectory of technology and science. Science fiction will often incorporate space, biology, energy, time, and any other observable science. Most of James Cameron's best movies lean heavily on science fiction.",
    }


  allProduct$: Observable<Product[]> = this.productService.getAll();
}
