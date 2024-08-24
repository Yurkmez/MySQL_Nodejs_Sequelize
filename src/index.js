import express from 'express';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const data = require('./data.json');

const app = express();

app.use(express.json());
app.get('/', (req, res) => {
    res.status(200).send(data);
});

app.listen(3000, (error) => {
    if (error) {
        throw new Error(error);
    }
    console.log('Backend is running');
});
