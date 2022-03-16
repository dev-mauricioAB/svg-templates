import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[containerRef]',
})
export class ContainerRefDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
