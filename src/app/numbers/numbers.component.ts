import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css'],
})
export class NumbersComponent implements OnInit {
  shownumbers = true;
  numbers = [1, 2, 3, 4, 23, 46, 75, 12, 92, 33];
  constructor() {}
  myvalue = 200;

  ngOnInit(): void {}
  toggleShow() {
    this.shownumbers = !this.shownumbers;
  }
}
