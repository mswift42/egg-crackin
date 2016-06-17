import { Component } from '@angular/core';
import {RecipesviewComponent} from './recipesview-component/recipesview.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [RecipesviewComponent]
})
export class AppComponent {
}
