import { Component, Input } from '@angular/core';
import {TooltipComponent} from '../tooltip/tooltip.component';
import {FavouriteService} from '../favourite.service';
import {Recipe} from '../recipe.service';

@Component({
  moduleId: module.id,
  selector: 'app-favourite',
  templateUrl: 'favourite.component.html',
  styleUrls: ['favourite.component.css'],
  directives: [TooltipComponent]
})
export class FavouriteComponent {
  @Input() publisher: string;
  @Input() recipe_url: string;
  @Input() title: string;
  @Input() source_url: string;
  @Input() image_url: string;
  @Input() publisher_url: string;

  constructor(private _favouriteService: FavouriteService) { }

  addFavourite() {
    let recipe = new Recipe(this.publisher, this.title, this.source_url,
      this.image_url, this.publisher_url);
    this._favouriteService.saveFavourite(recipe);
  }

}