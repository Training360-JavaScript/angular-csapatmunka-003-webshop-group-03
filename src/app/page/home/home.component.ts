import { Component, OnInit } from "@angular/core";
import { Product } from "src/app/model/product";
import { CategoryService } from "src/app/service/category.service";
import { ProductService } from "src/app/service/product.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  phrase: string = '';

  filterKey: string = '';

  constructor(
    private productService : ProductService,
    private categoryService : CategoryService
  ) { }

  ngOnInit(): void {
  }
  // A product tömb teljes tartalma
  productList: Product[] = this.productService.getAll();

  // A product tömb kategóriával szűrt tartalma. A szűrési változó a kategória neve.
  //listOfCategorizedProducts: Product[] = this.productService.getCategorized('comedy');
  //listOfCategorizedProducts: Product[] = this.productService.getCategorized('comedy');

}
