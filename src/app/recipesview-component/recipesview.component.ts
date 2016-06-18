import { Component } from '@angular/core';
import {MdToolbar} from '@angular2-material/toolbar';
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';

@Component({
  moduleId: module.id,
  selector: 'app-recipesview',
  templateUrl: 'recipesview.component.html',
  styleUrls: ['recipesview.component.css'],
  directives: [MdToolbar, MD_INPUT_DIRECTIVES]
})
export class RecipesviewComponent{

  constructor() {}


}
