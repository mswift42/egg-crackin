import { Component, OnInit } from '@angular/core';
import {SearchHistoryService} from '../search-history.service';

@Component({
  moduleId: module.id,
  selector: 'app-search-history',
  templateUrl: 'search-history.component.html',
  styleUrls: ['search-history.component.css'],
})
export class SearchHistoryComponent implements OnInit {
  searchhistory: string[];

  constructor(private _searchhistory: SearchHistoryService) { }

  ngOnInit() {
    this._searchhistory.loadFromStorage();
    this.searchhistory = this._searchhistory.searchhistory;
  }

}
