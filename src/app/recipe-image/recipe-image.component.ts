import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-recipe-image',
  templateUrl: 'recipe-image.component.html',
  styleUrls: ['recipe-image.component.css']
})
export class RecipeImageComponent implements OnInit {

  @Input() image_url: string;
  @Input() alt_text: string;


  constructor() {}

  ngOnInit() {
  }

}
