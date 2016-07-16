import { Component } from '@angular/core';
import {Recipe, RecipeService} from '../recipe.service';
import {RecipeComponent} from '../recipe/recipe.component';
import {RecipeSearchComponent} from '../recipe-search/recipe-search.component';
import {SearchHistoryService} from '../search-history.service';

@Component({
    moduleId: module.id,
    selector: 'app-recipesview',
    templateUrl: 'recipesview.component.html',
    styleUrls: ['recipesview.component.css'],
    directives: [RecipeComponent, RecipeSearchComponent]
})
export class RecipesviewComponent {

    recipes: Recipe[] = [];

    constructor(private recipeservice: RecipeService,
        private searchhistoryservice: SearchHistoryService) { }

    searchRecipes(query: string) {
        this.searchhistoryservice.saveSearch(query);
        this.recipeservice.recipes = [];
        this.recipeservice.getRecipes(query)
            .subscribe((recs) => {
                for (var i = 0; i < recs.length; i++) {
                    this.recipeservice.recipes.push(new Recipe(recs[i]["publisher"],
                        this.recipeservice.unsantize(recs[i]["title"]),
                        recs[i]["source_url"], recs[i]["image_url"], recs[i]["publisher_url"]))
                }
                this.recipes = this.recipeservice.recipes;
            });
    }

}
