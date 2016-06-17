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
  queryUrl(query: String): String {
    let split = query.trim().split(" ");
    let url = "http://food2fork.com/api/search?key=" + this.food2forkKey + "&q=";
    url += split[0];
    for (var i of split.slice(1)) {
      url += "&" + i;
    }
    return url;
  }
}
