// custom directive
// need to inform Angular that directive exists inside app.module.ts
import { Directive, ElementRef, OnInit } from '@angular/core';

// will be recognized whenever adding the selector without square brackets to an element
@Directive({
  selector: '[appBasicHighlight]'
})

// doesn't have all (i.e. afterViewInit) the of the hooks since a directive, unlike a component, doesn't have a template
export class BasicHighlightDirective implements OnInit {
  // elementRef gives access to the element the directive is placed on
  // adding private will make it a property of this class and automatically assign a value to the instance
  constructor(private elementRef: ElementRef) {}

  ngOnInit(){
    this.elementRef.nativeElement.style.backgroundColor = 'green';
  }
}
