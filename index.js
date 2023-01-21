import * as dotenv from 'dotenv';
dotenv.config()

import express, { json } from 'express';
import cors from 'cors';
import routes from './routes.js';


const app = express();
const port = 5000;



app.use(cors());
app.use(json());



app.use('/api', routes);



app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});