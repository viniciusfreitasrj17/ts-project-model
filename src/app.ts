import express from 'express';
import routes from './routes';

const app: express.Express = express();
app.use(express.json());
app.use(routes);

export default app;
