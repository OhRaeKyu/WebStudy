import jwt from 'jsonwebtoken';
import express, { Request, Response, NextFunction } from 'express';

const app = express();

const server = app.listen(3001, () => {
  console.log('Server running - localhost:3001');
});

app.get('/api/users/:type', async (req: Request, res: Response) => {
  const { type } = req.params;

  console.log(type);
  res.send('connect.');
});
