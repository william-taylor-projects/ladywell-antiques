
import * as compression from 'compression';
import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as cors from 'cors';

const app = express()
app.use(express.static(__dirname, { maxAge: '7d' }));
app.use(bodyParser.json());
app.use(compression());
app.use(cors());
app.get('/', (req, res) => {
    res.send('Hello User!')
})

app.listen(8080, () => {
    console.log('Ladywell Antiques Server Running!')
})