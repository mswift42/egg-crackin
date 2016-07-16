import { Component, Output, EventEmitter } from '@angular/core';
import {SearchHistoryService} from '../search-history.service';
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';

@Component({
  moduleId: module.id,
  selector: 'app-recipe-search',
  templateUrl: 'recipe-search.component.html',
  styleUrls: ['recipe-search.component.css'],
  directives: [MD_INPUT_DIRECTIVES]
})
export class RecipeSearchComponent {
  @Output() onSearch = new EventEmitter<string>();

  constructor(private _searchHistoryService: SearchHistoryService) {}

  searchRecipe(query: string) {
    this.onSearch.emit(query);
  }
}
