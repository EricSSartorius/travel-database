import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(results: any[], searchText: string): any[] {
    if (!results) return [];
    if (!searchText) return results;
    searchText = searchText.toLowerCase();
    return results.filter(result => {
      return result.country.toLowerCase().includes(searchText);
    });
  }
}