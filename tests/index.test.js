// index.test.js
const request = require('supertest');
const app = require('./index'); // Import your app

describe('GET /api/get/', () => {
  it('should return a welcome message', async () => {
    const response = await request(app).get('/api/get/');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Welcome to MyApp API');
  });
});

