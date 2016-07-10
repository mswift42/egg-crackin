import { Component } from '@angular/core';
import {RecipesviewComponent} from './recipesview-component/recipesview.component';
import {RecipeService} from './recipe.service';
import {FavouriteService} from './favourite.service';
import {MdToolbar} from '@angular2-material/toolbar';

@Component({
    moduleId: module.id,
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    directives: [RecipesviewComponent, MdToolbar],
    providers: [RecipeService, FavouriteService]
})
export class AppComponent {
}
