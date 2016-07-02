import { Component, OnInit } from '@angular/core';
import {RecipeImageComponent} from '../recipe-image/recipe-image.component';
import {PublisherUrlComponent} from '../publisher-url/publisher-url.component';
import {FavouriteComponent} from '../favourite/favourite.component';
import {TitleComponent} from '../title/title.component';

@Component({
  moduleId: module.id,
  selector: 'app-recipe',
  templateUrl: 'recipe.component.html',
  styleUrls: ['recipe.component.css'],
  directives: [RecipeImageComponent, PublisherUrlComponent,
    TitleComponent, FavouriteComponent]
})
export class RecipeComponent {

  constructor() { }


}
