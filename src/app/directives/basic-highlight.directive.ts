import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[rkhighlighter]',
})
export class BasicHighlightDirective implements OnInit {
  constructor(private someElement: ElementRef) {}
  ngOnInit(): void {
    this.someElement.nativeElement.style.backgroundColor = 'coral';
  }
}
