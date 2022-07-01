import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class CustomPipe implements PipeTransform {

  transform(names: string[],searchTerm:string ): any {
    if (!names || !searchTerm) {
      return names;
  }
  return names.filter(name =>
      name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
  }
   

}
