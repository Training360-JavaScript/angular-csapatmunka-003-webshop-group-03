import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/model/category';
import { Product } from 'src/app/model/product';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-data-detail',
  templateUrl: './data-detail.component.html',
  styleUrls: ['./data-detail.component.scss']
})
export class DataDetailComponent implements OnInit {


  @Input() product$!: any ;


  allCategory$: Observable<Category[]> = this.categoryService.getAllCategory();

  constructor(
    private categoryService: CategoryService,
  ) { }

  ngOnInit(): void {
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

  onEdit(): void {
    this.formDisabler = !this.formDisabler;
  }



}
