import {provideRouter, RouterConfig} from '@angular/router';
import {RecipesviewComponent} from './recipesview-component/recipesview.component';
import {FavouritesViewComponent} from './favourites-view/favourites-view.component';

const routes: RouterConfig = [
 
    {
        path: '',
        redirectTo: '/recipesearch',
        pathMatch: 'full'
    },
    {
        path: 'recipesearch',
        component: RecipesviewComponent
    },

    {
        path: 'favourites',
        component: FavouritesViewComponent
    },

];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];