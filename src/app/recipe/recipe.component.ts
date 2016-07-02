import { Component, OnInit } from '@angular/core';
import {RecipeImageComponent} from '../recipe-image/recipe-image.component';
import {RecipeUrlComponent} from '../recipe-url/recipe-url.component';
import {PublisherUrlComponent} from '../publisher-url/publisher-url.component';

@Component({
  moduleId: module.id,
  selector: 'app-recipe',
  templateUrl: 'recipe.component.html',
  styleUrls: ['recipe.component.css'],
  directives: [RecipeImageComponent, PublisherUrlComponent, RecipeUrlComponent]
})
export class RecipeComponent {

  constructor() {}


}
