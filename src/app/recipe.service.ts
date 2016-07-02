import {Injectable} from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

export class Recipe {

    constructor(public publisher: string, public title: string,
        public source_url: string, public image_url: string,
        public publisher_url: string) { }

}
@Injectable()
export class RecipeService {
    private _FOOD2FORKAPIKEY: string = '7987c43afcf8a03a964bbcb0c9152c84';

    constructor(private http: Http) { }
    
    get food2forkKey(): string {
        return this._FOOD2FORKAPIKEY;
    }
    queryUrl(query: string): string {
        let split = query.trim().split(" ");
        let url = "http://food2fork.com/api/search?key=" + this.food2forkKey + "&q=";
        url += split[0];
        for (var i of split.slice(1)) {
            url += "&" + i;
        }
        return url;
    }
    getRecipes(query: string): Promise<Recipe[]> {
        let url = this.queryUrl(query);
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
    }
    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
