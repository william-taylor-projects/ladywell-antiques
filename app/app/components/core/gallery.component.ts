
import { GalleryService, GalleryImage } from "../../services/gallery.service";
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Component } from "@angular/core";

@Component({
    selector: "gallery",
    templateUrl: 'app/components/core/gallery.component.html'
})
export class Gallery {
    private selectedImage: GalleryImage;

    constructor(private gallery: GalleryService, config: NgbCarouselConfig) {
        config.interval = 10000;
        config.keyboard = true;
        config.wrap = false;
    }
    
    openImage(index: number) {
        this.selectedImage = this.images()[index];
        console.log('Selected Image: ', index);
    }

    images(): GalleryImage[] {
        return this.gallery.getImages();
    }
}