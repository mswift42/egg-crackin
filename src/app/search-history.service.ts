import { Injectable } from '@angular/core';

@Injectable()
export class SearchHistoryService {
  private _searchhistory = [];
  private _storagename = 'SEARCHHISTORY';
  private _localStorage = window.localStorage;

  constructor() {}

  contains(search: string): boolean {
    return this._searchhistory.filter((i) => (i === search)).length > 0;
  }
  get searchhistory(): string[] {
    return this._searchhistory;
  }

  saveSearch(search: string) {
    if (!(this.contains(search))) {
      this._searchhistory.unshift(search);
      this.saveToStorage();
      if (this._searchhistory.length > 10) {
        this._searchhistory.pop();
        this.saveToStorage();
      }
    }
  }

  saveToStorage() {
    this._localStorage.setItem(this._storagename, this._storagename);
  }

  loadFromStorage() {
    this._searchhistory = this._localStorage.getItem(this._storagename);
  }

}
