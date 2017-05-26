
import * as compression from 'compression';
import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as cors from 'cors';
import * as metrics from 'appmetrics-dash';

const port = 8080;
const app = express()
const dash = metrics.monitor({
    title: 'Ladywell Antiques Server',
    port: 8000,
});

app.use(express.static(__dirname, { maxAge: '7d' }));
app.use(bodyParser.json());
app.use(compression());
app.use(cors());

app.get('/items', (req, res) => {
    res.send('Dummy email items')
})

app.get('/gallery', (req, res) => {
    res.send('Dummy email gallery')
})

app.post('/email', (req, res) => {
    res.send('Dummy email service')
})

app.get('/', (req, res) => {
    res.send('Service Online')
})

app.listen(port, () => {
    console.log(`Running on port ${port}`)
})