import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  // name: string = 'HeadPhones';
  // stock: number = 10;
  // availability: string = 'Available';

  @Input('productElement')
  productElement: {
    name: string;
    stock: number;
    availability: number;
  };

  constructor() {}

  ngOnInit(): void {}
}
