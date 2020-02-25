import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService  {
  public items: any = [];

  constructor() {

  this.items = [
      { title: "เสาวลักษณ์" },
      { title: "อรวรรณ" },
      { title: "three" },
      { title: "four" },
      { title: "five" },
      { title: "six" }
    ];
  }

  filterItems(searchTerm) {
    return this.items.filter(item => {
      return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }
}
//Data.Service.TsService
