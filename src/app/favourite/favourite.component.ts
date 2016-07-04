import { Component,Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-favourite',
  templateUrl: 'favourite.component.html',
  styleUrls: ['favourite.component.css']
})
export class FavouriteComponent {

  @Input() recipe_url: string;

  constructor() {}
}
