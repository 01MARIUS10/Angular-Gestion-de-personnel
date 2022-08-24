import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userFunctionnality'
})
export class UserFunctionnalityPipe implements PipeTransform {

  transform(type : string): string {

    let color !: string;

    switch(type){
      case 'Administrateur' : 
        color = "border-primary";
        break;
      case 'Communication' : 
        color = "border-info";
        break;
      case 'President' : 
        color = "border-danger";
        break;
      case 'Coordonnateur' : 
        color = "border-secondary";
        break;
      case 'Logistique' : 
        color = "border-success";
        break;
      case 'Archive' : 
        color = "border-white";
        break;
      case 'Sport' : 
        color = "border-warning";
        break;
      case 'Secretaire' : 
        color = "border-dark";
        break;
      default:
        color = "border-light";
        break
      
    }
    return "rounded border "+color;
  }

}
