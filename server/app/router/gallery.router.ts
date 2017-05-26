
import * as express from 'express';

const router = express.Router();
router.get('/get', (req, res) => {
    res.send('gallery');
});

export let galleryRoutes = router;
