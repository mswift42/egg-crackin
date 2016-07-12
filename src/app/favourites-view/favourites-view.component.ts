import { Component, OnInit } from '@angular/core';
import { FavouriteService } from '../favourite.service';
import { Recipe } from '../recipe.service';
import {BookmarkedComponent} from '../bookmarked/bookmarked.component';

@Component({
  moduleId: module.id,
  selector: 'app-favourites-view',
  templateUrl: 'favourites-view.component.html',
  styleUrls: ['favourites-view.component.css'],
  directives: [BookmarkedComponent]
})
export class FavouritesViewComponent implements OnInit {
  recipes: Recipe[];

  constructor(private _favouriteService: FavouriteService) {}

  ngOnInit() {
  this._favouriteService.loadFromStorage();
  this.recipes = this._favouriteService.favourites;
  }

  onDeleted(recipe_url: string) {
    this.recipes = this.recipes.filter((i) => i.source_url != recipe_url);
    this._favouriteService.deleteFavourite(recipe_url);
  }

}
