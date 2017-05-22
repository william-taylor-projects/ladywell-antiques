
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
        this.images = [];

        for(let i = 0; i < 3; i++) {
            this.images = this.images.concat([
                new GalleryImage("Vase", "images/image1.jpg"),
                new GalleryImage("Owls", "images/image2.jpg"),
                new GalleryImage("Cup", "images/image3.jpg"),
                new GalleryImage("Bowl", "images/image4.jpg")
            ]);
        }
    }

    getImages(): GalleryImage[] {
        return this.images;
    }
}