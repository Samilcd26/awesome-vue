const request = require('supertest');
const app = require('../bin/www'); // Express uygulamanızın dosya yolunu doğru şekilde belirtin
const URL="http://localhost:3000/api/v1/"
//login?userName=test&password=12s3s

describe('GET /', () => {
  it('should respond with 200', async () => {
    const response = await request(app).get(URL+"login?userName=test&password=12s3s");
    expect(response.status).toBe(200);
  });
});
