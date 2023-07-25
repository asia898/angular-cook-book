import { Directive, HostListener, Renderer2, ElementRef} from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})

export class DropdownDirective {
    constructor(private el: ElementRef, private renderer: Renderer2) {}

    @HostListener('click') onClick(eventData: Event) {
        const opened = this.el.nativeElement.classList;
      
        if (opened.contains('open')) {
            this.renderer.removeClass(this.el.nativeElement, 'open');
        } else {
            this.renderer.addClass(this.el.nativeElement, 'open');
        }
    }
}