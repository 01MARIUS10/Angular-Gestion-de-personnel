import { Directive, ElementRef ,HostListener ,Input} from '@angular/core';

@Directive({
  selector: '[appErrorInput]'
})
export class ErrorInputDirective {

  constructor(private el : ElementRef) {
      this.setheight(30);
      this.setBorder("");
   }

  @Input ('appErrorInput') BorderColor : string;

  @HostListener('mouseenter') onMouseEnter(){
    this.setheight(50);
      this.setBorder(this.BorderColor || "red");
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.setheight(30);
      this.setBorder("")
  }

  setheight(height:number){
    this.el.nativeElement.style.height= `${height}px`;
  }
  setBorder(color:string){
    let border
    if(color)
      border = "solid 2px "+color;
    else
      border="none"

    this.el.nativeElement.style.border=border;
  }  


}
