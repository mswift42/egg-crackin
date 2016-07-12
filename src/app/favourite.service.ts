import { Injectable } from '@angular/core';
import {Recipe} from './recipe.service';

@Injectable()
export class FavouriteService {
    private _favourites: Recipe[] = [];
    private _storagename = 'FAVOURITES';
    private _localStorage = window.localStorage;

    get favourites(): Recipe[] {
        return this._favourites;
    }


    constructor() { }

    saveFavourite(recipe: Recipe) {
        this._favourites.unshift(recipe);
        this.saveToStorage();
    }
    deleteFavourite(source_url: string) {
        this._favourites = this._favourites.filter((i) => i.source_url !== source_url);
        this.saveToStorage();
    }



    saveToStorage() {
        this._localStorage.setItem(this._storagename,
                                   JSON.stringify(this._favourites));
    }

    loadFromStorage() {
        this._favourites =
            JSON.parse(this._localStorage.getItem(this._storagename));
    }

}
