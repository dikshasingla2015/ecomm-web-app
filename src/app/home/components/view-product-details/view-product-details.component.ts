import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-product-details',
  templateUrl: './view-product-details.component.html',
  styleUrls: ['./view-product-details.component.scss']
})
export class ViewProductDetailsComponent implements OnInit {

  product: any;

  constructor(private readonly route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      console.log("details",data);
      this.product = data.productData;
    })
  }

}
