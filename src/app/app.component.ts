import { Component } from '@angular/core';
import {RecipesviewComponent} from './recipesview-component/recipesview.component';
import {RecipeService} from './recipe.service';
import {FavouriteService} from './favourite.service';
import {SearchHistoryService} from './search-history.service';
import {SideAndToolbarComponent} from './side-and-toolbar/side-and-toolbar.component';

@Component({
    moduleId: module.id,
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    directives: [SideAndToolbarComponent],
    providers: [RecipeService, FavouriteService, SearchHistoryService]
})
export class AppComponent {
}
