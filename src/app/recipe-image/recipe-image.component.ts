import { Component, OnInit, Input } from '@angular/core';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';

@Component({
  moduleId: module.id,
  selector: 'app-recipe-image',
  templateUrl: 'recipe-image.component.html',
  styleUrls: ['recipe-image.component.css'],
  directives: [MD_CARD_DIRECTIVES]
})
export class RecipeImageComponent implements OnInit {

  @Input() image_url: string;
  @Input() alt_text: string;


  constructor() {}

  ngOnInit() {
  }

}
