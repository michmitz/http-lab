const request = require('supertest');
const app = require('../lib/app');

describe('createResponse', () => {
  it('returns the word hi in plain text via GET', async() => {
    const response = await request(app)
      .get('/');

    expect(response.text)
      .toEqual('hi');
  });

  it('returns the word hi in plain text via POST', async() => {
    const response = await request(app)
      .post('/echo')
      .send({ body: 'hi', contentType: 'text/html', status: '200 OK' });

    expect(response.text)
      .toEqual('hi');
  });

  it('returns html with an h1 and the word red', async() => {
    const response = await request(app)
      .get('/red');

    expect(response.text)
      .toEqual('<html><body><h1>red</h1></body></html>');
  });

  it('returns html with an h1 and the word red', async() => {
    const response = await request(app)
      .get('/red');

    expect(response.text)
      .toEqual('<html><body><h1>red</h1></body></html>');
  });

  it('returns html with an h1 and the word red', async() => {
    const response = await request(app)
      .get('/green');

    expect(response.text)
      .toEqual('<html><body><h1>green</h1></body></html>');
  });

  it('returns html with an h1 and the word blue', async() => {
    const response = await request(app)
      .get('/blue');

    expect(response.text)
      .toEqual('<html><body><h1>blue</h1></body></html>');
  });

});
