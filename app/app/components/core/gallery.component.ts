
import { GalleryService, GalleryImage } from "../../services/gallery.service";
import { NgbCarouselConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component } from "@angular/core";

@Component({
    selector: "gallery",
    templateUrl: 'app/components/core/gallery.component.html'
})
export class Gallery {
    private selectedImage: GalleryImage;

    constructor(
        private gallery: GalleryService, 
        private config: NgbCarouselConfig,
        private modalService: NgbModal
    ) {
        config.interval = 10000;
        config.keyboard = true;
        config.wrap = false;
    }
    
    openImage(modal: any, index: number) {
        this.selectedImage = this.images()[index];
        this.modalService.open(modal);
    }

    images(): GalleryImage[] {
        return this.gallery.getImages();
    }
}