import { Directive, OnInit, ElementRef, Renderer2, HostListener, RendererStyleFlags2, HostBinding, Input } from "@angular/core";

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor : string = 'transparent';
  @Input() highlightColor: string = 'grey';

  @HostBinding('style.backgroundColor') backgroundColor : string;

  constructor(private elRef: ElementRef, private renderer: Renderer2){ }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
    }
  
  @HostListener('mouseenter') mouseover(eventData: Event) {
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'pink', RendererStyleFlags2.Important);
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent', RendererStyleFlags2.Important);
    this.backgroundColor = this.defaultColor;
  }
}