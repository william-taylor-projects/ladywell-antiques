
import { GalleryService as galleryService } from './services/gallery.service';

export let GalleryService = galleryService;

export let services = () : any[] => {
    return [
        galleryService
    ]
}