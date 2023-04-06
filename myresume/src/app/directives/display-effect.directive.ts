import { Directive , ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[disp-effect]'
})
export class DisplayEffectDirective {

  constructor(public eref: ElementRef) { }
  imageSlide(){
    this.eref.nativeElement.setTimeout(() => {
      this.eref.nativeElement.styles.transform = "translateX(100)";
    }, 1000);
  }
}
