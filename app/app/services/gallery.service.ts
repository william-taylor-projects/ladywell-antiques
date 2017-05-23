
import { Injectable } from "@angular/core";

export class GalleryImage {
    constructor(public title: string, public src: string) {
        // ...
    }
}

export class CarouselImage {
    constructor(public title: string, public src: string, public desc: string) {
        // ...
    }
}

@Injectable()
export class GalleryService {
    private carouselImages: CarouselImage[];
    private regularImages: GalleryImage[];

    constructor() {
        this.regularImages = [];

        for (let i = 0; i < 3; i++) {
            this.regularImages = this.regularImages.concat([
                new GalleryImage("Vase", "images/image1.jpg"),
                new GalleryImage("Owls", "images/image2.jpg"),
                new GalleryImage("Cup", "images/image3.jpg"),
                new GalleryImage("Bowl", "images/image4.jpg")
            ]);
        }

        this.carouselImages = [
            new CarouselImage("Pots from 1945", "images/silver1.jpg", "Built in a random location bought from a London auction"),
            new CarouselImage("Memorial ring from 1830", "images/silver2.jpg", "Chinese memorial ring made in Hong Kong"),
            new CarouselImage("Japanese Bowl from 1700", "images/silver3.jpg", "Ancient bronze bowl brought into the UK via traders")
        ]
    }

    getCarouselImages(): CarouselImage[] {
        return this.carouselImages;
    }

    getGalleryImages(): GalleryImage[] {
        return this.regularImages;
    }
}