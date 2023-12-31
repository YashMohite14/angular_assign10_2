import { Directive,  ElementRef, Renderer2  } from '@angular/core';

@Directive({
  selector: '[appCostomStyle]',
  standalone: true
})
export class CostomStyleDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', 'yellow');
    this.renderer.setStyle(this.el.nativeElement, 'font-weight', 'bold');
  }
}
