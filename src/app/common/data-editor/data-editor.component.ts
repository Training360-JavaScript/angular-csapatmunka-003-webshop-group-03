import { CategoryService } from 'src/app/service/category.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';
import { Category } from 'src/app/model/category';
import { FormControl, FormGroup, NgForm } from "@angular/forms";

@Component({
  selector: 'app-data-editor',
  templateUrl: './data-editor.component.html',
  styleUrls: ['./data-editor.component.scss']
})
export class DataEditorComponent implements OnInit {

  product$: Observable<Product> = this.activatedRoute.params.pipe(
    switchMap( params => this.productService.get(params['id']))
  );

  // Az eredetileg betöltött adattömb, ezt olvassa vissza reset-kor.
  initialProduct: Product = new Product();


  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {

    this.product$.subscribe(
      (data) => {
        // console.log(data);
        this.initialProduct = data;
      }
    )

  }

  allCategory$: Observable<Category[]> = this.categoryService.getAllCategory();


  // options: string[] = ["10", "20", "50"];
  // selectedQuantity = "20";

  // catName: any;
  // selectedOption= 'Drama';

  // catArray: string[] = [
  //   'daram', 'comedy', 'docu'
  // ]


  // categoryName(id: number): any {
  //   this.allCategory$.subscribe(
  //     data => {
  //       this.catName = data.filter(item => item.id === id)[0].name;
  //       console.log(data[0])
  //     }
  //   )
  // }



  onUpdate(product: Product, goBack?: boolean): void {
    // console.log(product)
    // A html input-jai string-et adnak vissza, ezt visszaállítja number formátummá.
    product.id = product.id*1;
    product.catId = product.catId*1;
    product.price = product.price*1;

    // A képek file útvonalából  kiszedei a 'fakepath'-ot.
    product.image = product.image.replace("C:\\fakepath\\", "");

    this.productService.update(product).subscribe(
      // product => console.log(product),
      (item) => {
        if (goBack) this.router.navigate(['/', 'admin'])
        // console.log(item);
      },
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


  onReset(editForm :NgForm) {
    //editForm.resetForm();
    console.log(this.initialProduct);
    console.log(this.selectedImage);
    editForm.setValue(this.initialProduct);
  }


  updateImageSource(editForm :NgForm) {
    editForm.controls['image'].setValue( this.selectedImage.replace("C:\\fakepath\\", "") );
    console.log(89);
  }

  selectedImage : string = '';


}
