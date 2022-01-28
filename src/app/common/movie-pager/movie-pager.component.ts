import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-movie-pager',
  templateUrl: './movie-pager.component.html',
  styleUrls: ['./movie-pager.component.scss']
})
export class MoviePagerComponent implements OnInit {

  @Input() productList!: Product [] | null;

  constructor() { }

  ngOnInit(): void {
  }

}
