
import { CategoryPipe as categoryPipe } from './pipes/category.pipe';

export let CategoryPipe = categoryPipe;

export let pipes = (): any[] => {
    return [
        categoryPipe
    ]
}