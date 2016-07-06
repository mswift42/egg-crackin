import { Injectable } from '@angular/core';
import {Recipe} from './recipe.service';

@Injectable()
export class FavouriteService {
	private _favourites: Recipe[] = [];
	private _storagename = 'FAVOURITES';
	private _localStorage = window.localStorage;


	constructor() {}

}
