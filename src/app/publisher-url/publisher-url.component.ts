import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-publisher-url',
    templateUrl: 'publisher-url.component.html',
    styleUrls: ['publisher-url.component.css']
})
export class PublisherUrlComponent {
    @Input() publisher: string;
    @Input() publisher_url: string;

    constructor() {}


}
