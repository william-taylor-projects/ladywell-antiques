
import compression = require('compression');
import bodyParser = require('body-parser');
import metrics = require('appmetrics-dash');
import express = require('express');
import cors = require('cors');

import { galleryRoutes } from './router/gallery.router';
import { emailRoutes } from './router/email.router';
import { shopRoutes } from './router/shop.router';

const dashboardPort = 8000;
const port = 8080;
const dash = metrics.monitor({
    docs: 'https://github.com/freelance-william-taylor/ladywell-antiques',
    title: 'Ladywell Antiques Server',
    port: dashboardPort
});

const redirect = `http://localhost:${dashboardPort}/appmetrics-dash`;
const app = express();

app.use(express.static(__dirname, { maxAge: '7d' }));
app.use(bodyParser.json());
app.use(compression());
app.use(cors());
app.use('/gallery', galleryRoutes);
app.use('/email', emailRoutes);
app.use('/shop', shopRoutes);
app.get('/', (req, res) => {
    res.redirect(redirect);
})

app.listen(port, () => {
    console.log(`Running on port ${port}`)
})