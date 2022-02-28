import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products = [
    {
      name: 'mouse',
      stock: 13,
      availability: 'available',
    },
    {
      name: 'keyboard',
      stock: 0,
      availability: 'not available',
    },
    // {
    //   name: 'laptop',
    //   stock: 100,
    //   availability: 'available',
    // },
    // {
    //   name: 'table',
    //   stock: 20,
    //   availability: 'in stock',
    // },
  ];

  showTestParagraph = true;

  constructor() {}

  ngOnInit(): void {}
  onProductAdded(productData: {
    productName: string;
    productAvailability: string;
    stock: number;
  }) {
    this.products.push({
      name: productData.productName,
      stock: productData.stock,
      availability: productData.productAvailability,
    });
  }

  getTestParagraphStyle() {
    return 'yellow';
  }
}
