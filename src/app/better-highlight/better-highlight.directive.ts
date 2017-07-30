// custom directive
// need to inform Angular that directive exists inside app.module.ts
// better approach because angular also works in environments without the dom; so, basic highlight, which tries to change the dom, won't have desired effect
import {
  Directive,
  OnInit,
  Renderer2,
  ElementRef,
  HostListener,
  HostBinding,
  Input
} from '@angular/core';

// will be recognized whenever adding the selector without square brackets to an element
@Directive({
  selector: '[appBetterHighlight]'
})

export class BetterHighlightDirective implements OnInit {
  // @Input enables passing a string color to overwrite with the binding  [defaultColor]="'yellow'"
  @Input() defaultColor: string = 'transparent';
  // sets an alias
  // by default, the directive is not accessed in square brackets; that only happens if the directive has a property with the same name or alias of the directive such as below
  @Input('appBetterHighlight') highlightColor: string = 'blue';
  // alternative approach to using renderer
  // commented out after adding @Input
  // @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';
  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;

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
    // commented out after adding @Input
    // this.backgroundColor = 'blue';
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // commented out after adding @HostBinding
    // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'transparent');
    // commented out after adding @Input
    // this.backgroundColor = 'transparent';
    this.backgroundColor = this.defaultColor;
  }
}
