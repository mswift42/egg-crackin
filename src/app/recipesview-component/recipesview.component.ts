import { Component } from '@angular/core';
import {MdToolbar} from '@angular2-material/toolbar';
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';
import {Recipe, RecipeService} from '../recipe.service';

@Component({
  moduleId: module.id,
  selector: 'app-recipesview',
  templateUrl: 'recipesview.component.html',
  styleUrls: ['recipesview.component.css'],
  directives: [MdToolbar, MD_INPUT_DIRECTIVES]
})
export class RecipesviewComponent {

  recipes: Recipe[];

  constructor(private recipeservice: RecipeService) { }

  searchRecipes(query: string) {
    this.recipeservice.getRecipes(query).then(recipes => 
    this.recipes = recipes);
  }

}
