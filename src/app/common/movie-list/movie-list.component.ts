import { NONE_TYPE } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/model/category';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  @Input() productList!: Product[] | null;
  @Input() categoryDetails!: Category;

  keyword: string = '';

  constructor() { }

  ngOnInit( ): void {
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

}
