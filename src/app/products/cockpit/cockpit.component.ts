import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit {
  productName = '';
  productStock = 0;
  addDisabled = false;
  constructor() {}

  @Output()
  productAdded = new EventEmitter<{
    productName: string;
    productAvailability: string;
    stock: number;
  }>();

  ngOnInit(): void {}

  onAddProduct() {
    this.productAdded.emit({
      productName: this.productName,
      productAvailability: this.productStock > 0 ? 'Available' : 'No Stock',
      stock: this.productStock,
    });
  }
}
