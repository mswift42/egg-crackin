import { Component, Output, EventEmitter } from '@angular/core';
import {SearchHistoryService} from '../search-history.service';

@Component({
  moduleId: module.id,
  selector: 'app-recipe-search',
  templateUrl: 'recipe-search.component.html',
  styleUrls: ['recipe-search.component.css']
})
export class RecipeSearchComponent {
  @Output() onSubmit = new EventEmitter<string>();

  constructor(private _searchHistoryService: SearchHistoryService) {}

  searchRecipe(query: string) {
    this.onSubmit.emit(query);
  }
}
