import { Component, OnInit } from '@angular/core';
import { FavouriteService } from '../favourite.service';
import { Recipe } from '../recipe.service';
import {RecipeComponent} from '../recipe/recipe.component';

@Component({
  moduleId: module.id,
  selector: 'app-favourites-view',
  templateUrl: 'favourites-view.component.html',
  styleUrls: ['favourites-view.component.css'],
  directives: [RecipeComponent]
})
export class FavouritesViewComponent implements OnInit {
  recipes: Recipe[];

  constructor(private _favouriteService: FavouriteService) {}

  ngOnInit() {
  this._favouriteService.loadFromStorage();
  this.recipes = this._favouriteService.favourites;
  }

}
