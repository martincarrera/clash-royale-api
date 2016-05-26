require('should');

const request = require('supertest');
const app = require('./helpers/mock.app');

describe('Server API', function () {
  this.timeout(5000);

  describe('GET /', () => {
    it('should get main page', done => {
      request(app)
        .get('/')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .end((err, res) => {
          res.status.should.eql(200);
          done();
        });
    });
  });
});
