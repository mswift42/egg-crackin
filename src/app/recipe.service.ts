import {Injectable} from '@angular/core';
export class Recipe {

  constructor(public publisher: String, public title: String,
    public source_url: String, public image_url: String,
    public publisher_url: String) { }

}
@Injectable()
export class RecipeService {
  private _FOOD2FORKAPIKEY: String = '7987c43afcf8a03a964bbcb0c9152c84';

  get food2forkKey(): String {
    return this._FOOD2FORKAPIKEY;
  }
}
