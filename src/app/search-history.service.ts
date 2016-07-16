import { Injectable } from '@angular/core';

@Injectable()
export class SearchHistoryService {
  private _searchhistory: string[] = [];
  private _storagename = 'SEARCHHISTORY';
  private _localStorage = window.localStorage;

  constructor() { }

  contains(search: string): boolean {
    return this.searchhistory.filter((i) => (i === search)).length > 0;
  }
  get searchhistory(): string[] {
    return this._searchhistory;
  }
  addToHistory(query: string) {
    this._searchhistory.unshift(query);
  }

  saveSearch(search: string) {
    if (!(this.contains(search))) {
      this.addToHistory(search);
      this.saveToStorage();
      if (this._searchhistory.length > 10) {
        this._searchhistory.pop();
        this.saveToStorage();
      }
    }
  }

  saveToStorage() {
    this._localStorage.setItem(this._storagename, JSON.stringify(this._searchhistory));
  }

  loadFromStorage() {
    this._searchhistory = JSON.parse(this._localStorage.getItem(this._storagename)) || [];
  }

}
