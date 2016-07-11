import { Component } from '@angular/core';
import {RecipesviewComponent} from './recipesview-component/recipesview.component';
import {RecipeService} from './recipe.service';
import {FavouriteService} from './favourite.service';
import {MdToolbar} from '@angular2-material/toolbar';
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    directives: [RecipesviewComponent, MdToolbar, ROUTER_DIRECTIVES],
    providers: [RecipeService, FavouriteService]
})
export class AppComponent {
}
