
import * as express from 'express';

const router = express.Router();
router.get('/get', (req, res) => {
    res.send('email');
});

export let emailRoutes = router;
