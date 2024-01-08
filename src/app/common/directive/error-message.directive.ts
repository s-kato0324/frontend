import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appErrorMessage]',
})
export class ErrorMessageDirective {
  @Input() appErrorMessage = '';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.showText(this.appErrorMessage);
  }

  @HostListener('mouseleave') onMouseLeave() {
    // this.showText(this.appErrorMessage);
    this.showText('');
  }

  private showText(text: string) {
    this.renderer.setProperty(this.el.nativeElement, 'textContent', text);
    this.renderer.addClass(this.el.nativeElement, 'errorMessage');
  }
}
