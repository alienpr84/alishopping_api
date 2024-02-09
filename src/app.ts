import express, { Express, Request, Response} from 'express';

function app(): Express {
  const server: Express = express();

  // middlewares

  // routes
  server.get('/', (_: Request, res: Response) => res.send('Server is running...'));

  return server;
}

export default app;