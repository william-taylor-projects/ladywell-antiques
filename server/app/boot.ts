
import * as metrics from 'appmetrics-dash';
import * as compression from 'compression';
import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as cors from 'cors';

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