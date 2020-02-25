import { Component, OnInit } from '@angular/core';
import { DataService } from "../services/data.service.ts.service";


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

    public searchTerm: string = "";
    public items: any;
  constructor(private dataService: DataService) {}
  ngOnInit(){
    this.setFilteredItems();

  }
  setFilteredItems(){
    this.items = this.dataService.filterItems(this.searchTerm)
  }
}
