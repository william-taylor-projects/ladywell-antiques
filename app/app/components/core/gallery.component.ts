import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Component } from "@angular/core";

@Component({
    selector: "gallery",
    templateUrl: 'app/components/core/gallery.component.html'
})
export class Gallery {
    constructor(config: NgbCarouselConfig) {
        config.wrap = false;
    }
}