import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import categoryRoute from './routes/categories.js';
import itemRoute from './routes/items.js';
import doubleRoute from './routes/double.js';
import mongodb from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const api = express();
const port = process.env.PORT || 3000;

api.use(express.json());
api.use('/api', categoryRoute);
api.use('/api', itemRoute);
api.use('/api', doubleRoute);
api.use('/static', express.static(path.join(__dirname + '/public')));

const { MongoClient } = mongodb;
const uri = process.env.URI;

const client = new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

await client.connect();
console.log('Connected to mongodb');

api.listen(port, () => {
    // local test
    console.log(`Listening on http://localhost:${port}`);
});

export default client;



