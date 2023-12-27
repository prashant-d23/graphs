import { Component } from '@angular/core';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.scss']
})
export class TemplatesComponent {
  //This function only accepts html elements
  log(answer?: HTMLElement): void {
    console.log(answer)
   }

  //  answer 3 solution
   log2(a:string,b:string){
    console.log(a,b)
   }

}
