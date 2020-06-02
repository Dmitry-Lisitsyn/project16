import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myfilter'
})
export class MyfilterPipe implements PipeTransform {

  transform(items: any[], searchName: string): any {
   
    let _fullname = searchName;
    let filteredValues = [];
    

    if((_fullname != "" || _fullname != null)) {

      return filteredValues ? items.filter(item => (item.name+" "+item.surname).toLowerCase().indexOf(_fullname.toLowerCase()) !== -1) : items;
       
    };
  }

}
