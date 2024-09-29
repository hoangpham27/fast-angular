import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHightlight]',
})
export class HightlightDirective {
  @Input() appHightlight = '';

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.el.nativeElement.style.backgroundColor = this.appHightlight;
  }
}
