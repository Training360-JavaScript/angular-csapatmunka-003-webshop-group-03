import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Category } from 'src/app/model/category';
import { Product } from 'src/app/model/product';
import { CategoryService } from 'src/app/service/category.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-data-create',
  templateUrl: './data-create.component.html',
  styleUrls: ['./data-create.component.scss']
})
export class DataCreateComponent implements OnInit {



  @Input() newItem!: boolean;

  product: Product = new Product();

  allCategory$: Observable<Category[]> = this.categoryService.getAllCategory();

  newId: number = 0;



  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
    this.productService.getAll().subscribe({
      next: (data) => {
        this.newId = Math.max(...data.map(x => x.id)) + 1;
        this.product.id = this.newId;
       },
       error: (err) => console.log(err),
       complete: () => console.log('onCreate...')
     })
  }

  formDisablerAll: boolean = false;
  formDisabler: boolean = false;

  selectedImage: string = '';
  updateImageSource(editForm: NgForm) {
    editForm.controls['image'].setValue(this.selectedImage.replace("C:\\fakepath\\", ""));
  }




  onCancel() {
    this.formDisablerAll = !this.formDisablerAll;
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
       complete: () => {
         console.log('onCreate complete')
         this.formDisablerAll = !this.formDisablerAll;
        }
     })
     // console.log('ID: ', product.id)
 }

}
