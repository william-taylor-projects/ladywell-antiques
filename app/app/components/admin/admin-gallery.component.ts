
import { GalleryImage, GalleryService } from '../../services/gallery.service';
import { Component } from '@angular/core';

@Component({
    selector: 'gallery',
    moduleId: module.id,
    templateUrl: './admin-gallery.component.html'
})
export class AdminGallery {
    constructor(private gallery: GalleryService) {
        // ...
    }

    delete() {
        // TODO: delete image
    }

    add() {
        // TODO: add image
    }

    get images(): GalleryImage[] {
        let carousel = this.gallery.getCarouselImages() as any[];
        let gallery = this.gallery.getGalleryImages() as any[];

        return carousel.concat(gallery);
    }
}