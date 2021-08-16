import express, { Request, Response } from 'express';
import cors from 'cors';
import { dbConnect } from './config/dbConnect';
import route from './routes/todoRoute';

const app = express();

/* localhost:3000からのみアクセス許可 */
app.use(
  cors({
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
  })
);

/* データベース接続 */
dbConnect();

app.use('/api', route);

export default app;
