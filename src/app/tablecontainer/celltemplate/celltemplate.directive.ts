import { Directive, ElementRef, HostBinding, HostListener, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[celltemplate]'
})
export class CelltemplateDirective {

  @Input() celltemplate?: TemplateRef<any> | "" = undefined;
  
  @HostListener('mouseleave') onBlockLeave() {
    console.log('bye bye block');
  };

  @HostListener('click', ['$event']) onBlockClick(ev: Event) {
    {
      console.log('clickety from directive');
      
      console.log(this.celltemplate);
      console.log(ev);
      console.log(Object.keys(parent));
    };
  };
  
  @HostBinding('style.color') blockColor: string = 'red';
  

//   *@HostListener*  
// ('click', ['$event.target'])
// onClick(btn) {
// console.log('button', btn, 'number of clicks:', this.numberOfClicks++);
// }
// }  

  constructor(private el: ElementRef) { 
    // viewRef.createEmbeddedView(cellTemplate);
  }

  ngOnit() {
    
  }
}
