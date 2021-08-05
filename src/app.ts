import express, { Request, Response } from 'express';
const app = express();

app.get('/', (req: Request, res: Response) => {
  const data = { message: 'Hello' };
  res.send(data);
});

export default app;
