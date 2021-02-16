import dotenv = require('dotenv');
import path from 'path';

dotenv.config({
    path: path.resolve(__dirname, '..' ,'.env')
});

import express from 'express';
import cors from 'cors';
import routes from './routes/router'
import dbConnection from './models/database';

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

app.listen(process.env.PORT, () => {
    console.log(`listening at ${process.env.PORT}`);
});

dbConnection.on('error', console.error.bind(console, 'connection error:'));
dbConnection.once('open', () => console.log('connected to Database:', dbConnection.name));

export default app;