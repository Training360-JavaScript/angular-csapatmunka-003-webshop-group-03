import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { Category } from 'src/app/model/category';
import { Product } from 'src/app/model/product';
import { CategoryService } from 'src/app/service/category.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-data-detail',
  templateUrl: './data-detail.component.html',
  styleUrls: ['./data-detail.component.scss']
})
export class DataDetailComponent implements OnInit {

  @Input() product?: Product;
  @Input() newItem: boolean = false;


  allCategory$: Observable<Category[]> = this.categoryService.getAllCategory();

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
    if (this.product === null) this.product = new Product();
  }



  icon: number = 0;
  // A táblázat/lista sorbarendezéséhez:
  columnKey: string = '';
  sortDirection: string = 'A...Z';
  clickCounter: number = 0;
  onColumnSelect(key: string): void {
    (key === this.columnKey) ? this.clickCounter++ : this.clickCounter = 0;
    this.sortDirection = (this.clickCounter % 2) ? 'Z...A' : 'A...Z';
    this.columnKey = key;

    if (key === 'name') this.icon = (this.sortDirection === 'A...Z') ? 1 : 2;
    if (key === 'stock') this.icon = (this.sortDirection === 'A...Z') ? 3 : 4;
    if (key === 'price') this.icon = (this.sortDirection === 'A...Z') ? 5 : 6;

  }


  formDisabler: boolean = true;
  divStyle: string = '1px solid #888;';

  onEdit(): void {
    const idNumber = this.product.id;
    this.formDisabler = !this.formDisabler;
    this.productService.get(idNumber).subscribe({
      next: (data) => {
        this.product = data;
        // console.log('edit');
        // console.log(this.product);
      },
      error: (err) => console.log(err),
      complete: () => console.log('onEdit complete')
    }
    )
    //this.divStyle = (this.divStyle != '1px solid #888;') ? '3px solid red;' : '1px solid #888;';
  }

  //num?: number = this.product.id;
  //product$: Observable<Product> = this.productService.get(3);

  // Az eredetileg betöltött adattömb, ezt olvassa vissza reset-kor.
  //initialProduct: Product = new Product();

  onReset(editForm: NgForm) {
    //editForm.resetForm();
    if (this.product) {
      const idNumber = this.product.id;
      this.productService.get(idNumber).subscribe(
        data => {
          console.log(data);
          editForm.setValue(data)
        }
      )
    }
  }


  selectedImage: string = '';
  updateImageSource(editForm: NgForm) {
    editForm.controls['image'].setValue(this.selectedImage.replace("C:\\fakepath\\", ""));
  }


  onUpdate(product: Product, goBack?: boolean): void {
    this.formDisabler = !this.formDisabler;
    console.log(product)
    // A html input-jai string-et adnak vissza, ezt visszaállítja number formátummá.
    product.id = product.id * 1;
    product.catId = product.catId * 1;
    product.price = product.price * 1;

    // A képek file útvonalából  kiszedei a 'fakepath'-ot.
    product.image = product.image.replace("C:\\fakepath\\", "");

    this.productService.update(product).subscribe(
      // product => console.log(product),
      (item) => {
        //if (goBack) this.router.navigate(['/', 'admin'])
        console.log('update working...');
        console.log(item);

      },
      err => console.log(err)
    )
  }


  formDisablerAll: boolean = false;

  onDelete(id: number): void {
    // console.log('onDelete work...');
    this.productService.delete(id).subscribe({
      next: () => {
        this.formDisablerAll = true;
        //this.router.navigate(['/', 'admin'])
        console.log('delete...');
        // console.log(this.product);
      },
      error: (err) => console.log(err),
      complete: () => console.log('onDelete complete')
    })
  }


  onCreate(product: Product){
     //let newId = 0;
     this.productService.getAll().subscribe({
       next: (data) => {
         //let newId = Math.max(...data.map(x => x.id)) + 1;
         // console.log('newID-1: ', newId)
         product.id = Math.max(...data.map(x => x.id)) + 1;
         this.productService.create(product).subscribe()
        },
        error: (err) => console.log(err),
        complete: () => console.log('onCreate complete')
      })
      // console.log('ID: ', product.id)
  }





}
