import { Component, Input} from '@angular/core';
import { FavouriteService } from '../favourite.service';
import { RecipeImageComponent} from '../recipe-image/recipe-image.component';
import { TitleComponent} from '../title/title.component';
import { PublisherUrlComponent} from '../publisher-url/publisher-url.component';
import {TooltipComponent} from '../tooltip/tooltip.component';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
@Component({
    moduleId: module.id,
    selector: 'app-bookmarked',
    templateUrl: 'bookmarked.component.html',
    styleUrls: ['bookmarked.component.css'],
    directives: [TitleComponent, PublisherUrlComponent, 
    RecipeImageComponent, TooltipComponent, TooltipComponent,
    MD_CARD_DIRECTIVES]
})
export class BookmarkedComponent {
    @Input() title: string;
    @Input() recipe_url: string;
    @Input() image_url: string;
    @Input() publisher: string;
    @Input() publisher_url: string;

    constructor(private _favouriteService: FavouriteService) {}

    deleteFavourite(recipe_url: string) {
        this._favouriteService.deleteFavourite(recipe_url);
    }




}
