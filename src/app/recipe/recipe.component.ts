import { Component, OnInit, Input} from '@angular/core';
import {RecipeImageComponent} from '../recipe-image/recipe-image.component';
import {PublisherUrlComponent} from '../publisher-url/publisher-url.component';
import {FavouriteComponent} from '../favourite/favourite.component';
import {TitleComponent} from '../title/title.component';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';

@Component({
  moduleId: module.id,
  selector: 'app-recipe',
  templateUrl: 'recipe.component.html',
  styleUrls: ['recipe.component.css'],
  directives: [RecipeImageComponent, PublisherUrlComponent,
    TitleComponent, FavouriteComponent, MD_CARD_DIRECTIVES]
})
export class RecipeComponent {
  @Input() title: string;
  @Input() recipe_url: string;
  @Input() image_url: string;
  @Input() publisher: string;
  @Input() publisher_url: string;

  constructor() { }


}
