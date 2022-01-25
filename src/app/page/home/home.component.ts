import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private productService : ProductService,
  ) { }

  ngOnInit(): void {
  }

  // A product tömb teljes tartalma
  productList: Product[] = this.productService.getAll();

  // A product tömb kategóriával szűrt tartalma. A szűrési változó a kategória neve.
  //listOfCategorizedProducts: Product[] = this.productService.getCategorized('');

}
