const request = require('supertest');
const app = require('./app');

describe('Mock App API', () => {
  it('creates a user', async () => {
    const res = await request(app)
      .post('/createUser')
      .send({ id: '1', name: 'Alice', department: 'IT' });
    expect(res.status).toBe(201);
    expect(res.body).toEqual({ status: 'success', id: '1' });
  });

  it('rejects missing fields', async () => {
    const res = await request(app)
      .post('/createUser')
      .send({ id: '2' });
    expect(res.status).toBe(400);
  });
});
