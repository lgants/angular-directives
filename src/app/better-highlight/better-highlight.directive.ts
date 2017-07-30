// custom directive
// need to inform Angular that directive exists inside app.module.ts
// better approach because angular also works in environments without the dom; so, basic highlight, which tries to change the dom, won't have desired effect 
import { Directive, OnInit, Renderer2, ElementRef } from '@angular/core';

// will be recognized whenever adding the selector without square brackets to an element
@Directive({
  selector: '[appBetterHighlight]'
})

export class BetterHighlightDirective implements OnInit {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  // fourth argument, which is optional, is a flag
  ngOnInit(){
    this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'blue')
  }
}
