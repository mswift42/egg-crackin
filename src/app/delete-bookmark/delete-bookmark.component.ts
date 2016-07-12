import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-delete-bookmark',
  templateUrl: 'delete-bookmark.component.html',
  styleUrls: ['delete-bookmark.component.css']
})
export class DeleteBookmarkComponent {
  @Input() recipe_url: string;
  @Output() onDeleted = new EventEmitter<string>();

  constructor() {}

  deleteBookmark() {
    this.onDeleted.emit(this.recipe_url);
  }

}
