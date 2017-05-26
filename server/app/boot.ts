
import * as compression from 'compression';
import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as cors from 'cors';
import * as metrics from 'appmetrics-dash';

const dashboardPort = 8000;
const port = 8080;
const dash = metrics.monitor({
    docs: 'https://github.com/freelance-william-taylor/ladywell-antiques',
    title: 'Ladywell Antiques Server',
    port: dashboardPort
});

const app = express();
app.use(express.static(__dirname, { maxAge: '7d' }));
app.use(bodyParser.json());
app.use(compression());
app.use(cors());

app.get('/items', (req, res) => {
    res.send('Dummy shop items')
})

app.get('/gallery', (req, res) => {
    res.send('Dummy gallery items')
})

app.post('/email', (req, res) => {
    res.send('Dummy email items')
})

app.get('/', (req, res) => {
    res.redirect(`http://localhost:${dashboardPort}/appmetrics-dash`);
})

app.listen(port, () => {
    console.log(`Running on port ${port}`)
})