import { Express } from 'express';
import app from './app';

export function main() {
  const server: Express = app(); 
  server.listen(8080, () => console.log(`Server is running on port 8080...`));
}

main();
