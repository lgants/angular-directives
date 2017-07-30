import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  // need to ensure name is same as selector (i.e. appunless)
  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      // createEmbeddedView creates a view inside the container
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      // clear method removes this from the dom
      this.vcRef.clear();
    }
  }

  // inject the template
  // template ref gives access to the template the directive is on (same as element ref gives access to the element the directive is on)
  // ViewContainerRef marks the place where the directive is placed in the document
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
