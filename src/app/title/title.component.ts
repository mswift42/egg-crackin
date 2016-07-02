import { Component, OnInit, Input} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-title',
  templateUrl: 'title.component.html',
  styleUrls: ['title.component.css']
})
export class TitleComponent implements OnInit {

  @Input() title: string;
  @Input() recipe_url: string;

  constructor() {}

  ngOnInit() {
  }

}
