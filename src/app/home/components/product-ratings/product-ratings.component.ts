import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-ratings',
  templateUrl: './product-ratings.component.html',
  styleUrls: ['./product-ratings.component.scss']
})
export class ProductRatingsComponent implements OnInit {

  @Input()
  starRating!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
