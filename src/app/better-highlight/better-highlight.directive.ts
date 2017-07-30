// custom directive
// need to inform Angular that directive exists inside app.module.ts
// better approach because angular also works in environments without the dom; so, basic highlight, which tries to change the dom, won't have desired effect
import {
  Directive,
  OnInit,
  Renderer2,
  ElementRef,
  HostListener,
  HostBinding
} from '@angular/core';

// will be recognized whenever adding the selector without square brackets to an element
@Directive({
  selector: '[appBetterHighlight]'
})

export class BetterHighlightDirective implements OnInit {
  // alternative approach to using renderer
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  // fourth argument, which is optional, is a flag
  ngOnInit(){
    // commented out after adding @HostListener
    // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'blue');
  }

  // triggered whenever the specified event occurs
  @HostListener('mouseenter') mouseover(eventData: Event) {
    // commented out after adding @HostBinding
    // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'blue');
    this.backgroundColor = 'blue';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // commented out after adding @HostBinding
    // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'transparent');
    this.backgroundColor = 'transparent';
  }
}
