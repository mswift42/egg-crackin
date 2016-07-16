import { Component, Output } from '@angular/core';
import {SearchHistoryService} from '../search-history.service';

@Component({
  moduleId: module.id,
  selector: 'app-recipe-search',
  templateUrl: 'recipe-search.component.html',
  styleUrls: ['recipe-search.component.css']
})
export class RecipeSearchComponent {

  constructor(private _searchHistoryService: SearchHistoryService) {}


}
