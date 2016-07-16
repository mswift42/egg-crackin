import { Component, OnInit } from '@angular/core';
import {MdToolbar} from '@angular2-material/toolbar';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MD_BUTTON_DIRECTIVES} from '@angular2-material/button';
@Component({
  moduleId: module.id,
  selector: 'app-side-and-toolbar',
  templateUrl: 'side-and-toolbar.component.html',
  styleUrls: ['side-and-toolbar.component.css'],
  directives: [ROUTER_DIRECTIVES, MdToolbar, MD_SIDENAV_DIRECTIVES,
    MD_LIST_DIRECTIVES]
})
export class SideAndToolbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
