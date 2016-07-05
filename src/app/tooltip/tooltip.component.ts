import { Component, Input} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-tooltip',
  templateUrl: 'tooltip.component.html',
  styleUrls: ['tooltip.component.css']
})
export class TooltipComponent {

  @Input() message: string;

  constructor() { }

}
