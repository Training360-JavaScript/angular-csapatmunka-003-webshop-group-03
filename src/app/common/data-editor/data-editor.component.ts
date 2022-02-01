import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-data-editor',
  templateUrl: './data-editor.component.html',
  styleUrls: ['./data-editor.component.scss']
})
export class DataEditorComponent implements OnInit {

  product$: Observable<Product> = this.activatedRoute.params.pipe(
    switchMap( params => this.productService.get(params['id']))
  );

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onUpdate(product: Product): void {
    this.productService.update(product).subscribe(
      // product => console.log(product),
      () => this.router.navigate(['/', 'admin']),
      err => console.log(err)
    )
  }

  onDelete(id: number): void {
    // console.log('onDelete work...');
    this.productService.delete(id).subscribe(
      () => this.router.navigate(['/', 'admin']),
      err => console.log(err)
    )
  }

}
