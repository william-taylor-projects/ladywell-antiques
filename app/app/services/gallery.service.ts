
import { Injectable } from "@angular/core";

export class GalleryImage {
    constructor(public name: string, public src: string) {
        // ...
    }
}

@Injectable()
export class GalleryService {
    private images: GalleryImage[];

    constructor() {
        this.images = [
            new GalleryImage("Name", "images/placeholder.png"),
            new GalleryImage("Name", "images/placeholder.png"),
            new GalleryImage("Name", "images/placeholder.png")
        ]
    }

    getImages(): GalleryImage[] {
        return this.images;
    }
}