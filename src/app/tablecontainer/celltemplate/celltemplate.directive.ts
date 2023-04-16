import { Directive, ElementRef, HostBinding, HostListener, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[celltemplate]',
  exportAs: 'cellT'   // Note, this allows for <ng-template #column2="cellT"> --> assigns to a variable
    
})
export class CelltemplateDirective {

  // @Input() celltemplate?: TemplateRef<any> | "" = undefined;
  @Input() celltemplate?: string | "" = undefined;
  
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

  constructor(public template: TemplateRef<any>) { 
    // viewRef.createEmbeddedView(cellTemplate);
  }

  ngOnit() {
    
  }
}
