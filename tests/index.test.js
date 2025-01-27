import request from 'supertest';
import app from '../index';

describe('API Tests', () => {
  it('should return a welcome message on GET /api/get/', async () => {
    const response = await request(app).get('/api/get/');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Welcome to MyApp API');
  });

  it('should echo a message on POST /api/echo', async () => {
    const response = await request(app)
      .post('/api/echo')
      .send({ message: 'Hello, API!' });
    expect(response.status).toBe(200);
    expect(response.body.echo).toBe('Hello, API!');
  });

  it('should return a health check status on GET /api/health', async () => {
    const response = await request(app).get('/api/health');
    expect(response.status).toBe(200);
    expect(response.body.status).toBe('OK');
    expect(response.body).toHaveProperty('uptime');
  });

  it('should greet the user by name on GET /api/greet/:name', async () => {
    const response = await request(app).get('/api/greet/John');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Hello, John!');
  });
});


