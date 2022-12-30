import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[DelSpace]'
})
export class DelSpaceDirective {

  constructor(private el: ElementRef) {}

  @HostListener('blur')
  delSpace() {
    this.el.nativeElement.value = this.el.nativeElement.value.trim();
  }

}
