
import { Injectable } from "@angular/core";

class GalleryImage {
    name: string;
    desc: string;
    src: string;
}

@Injectable()
export class GalleryService {
    constructor() {

    }

    getImages() : GalleryImage[] {
        return [];
    }
}