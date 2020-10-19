import express from 'express';
import cors from 'cors';

import './database/connection';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);

export default app;
