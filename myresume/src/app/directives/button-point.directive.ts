import { Directive , HostListener, Input, ElementRef} from '@angular/core';

@Directive({
  selector: '[hover-class]'
})
export class ButtonPointDirective {

  constructor(private eref : ElementRef) { }

@HostListener ('mouseover') onMouseEnter(){
  this.eref.nativeElement.classList.add('hover')
  console.log(this.eref)
}
@HostListener ('mouseleave') onMouseLeave(){
  this.eref.nativeElement.classList.remove('hover')
}
}
