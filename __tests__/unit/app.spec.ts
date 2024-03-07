import request from 'supertest';
import app from '../../src/app';

describe('App', () => {
  const server = app();

  it('should return "Server is running..." when GET /', async () => {
    const response = await request(server).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Server is running...');
  });
});