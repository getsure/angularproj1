import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMycolor]'
})
export class MycolorDirective {

  constructor(private elementRef:ElementRef, private renderer2:Renderer2) { 
    // elementRef.nativeElement.style.color = 'red'
    // elementRef.nativeElement.style.backgroundColor = 'gold'
    renderer2.addClass(elementRef.nativeElement,'myclass')
  }

}
