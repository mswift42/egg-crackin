import { Component, Input } from '@angular/core';
import {TooltipComponent} from '../tooltip/tooltip.component';

@Component({
  moduleId: module.id,
  selector: 'app-favourite',
  templateUrl: 'favourite.component.html',
  styleUrls: ['favourite.component.css'],
  directives: [TooltipComponent]
})
export class FavouriteComponent {
  @Input() publisher: string;
  @Input() recipe_url: string;
  @Input() title: string;
  @Input() source_url: string;
  @Input() image_url: string;
  @Input() publisher_url: string;

  constructor() { }
}
