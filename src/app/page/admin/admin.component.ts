import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
  }

  allProduct: Observable<Product[]> = this.productService.getAll();

  pageShow: string = 'simple';

  show1: boolean = true;
  show2: boolean = false;

  pageSelect(page: string) {
    if (page === 'simple') {
      this.show1 = true;
      this.show2 = false;
    }
    if (page === 'advanced') {
      this.show1 = false;
      this.show2 = true;
    }

  }

}
