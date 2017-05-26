
import express = require('express');

const router = express.Router();
router.get('/get', (req, res) => {
    res.send('items');
});

export let shopRoutes = router;
