
import express = require('express');

const router = express.Router();
router.get('/get', (req, res) => {
    res.send('email');
});

export let emailRoutes = router;
