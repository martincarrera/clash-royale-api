require('should');

const request = require('supertest');
const app = require('./helpers/mock.app');
const config = require('../src/config/config');
var token = '';

describe('CMS.', function () {
  this.timeout(5000);

  describe('/api/cms', () => {
    before((done) => {
      request(app)
      .post('/api/authenticate')
      .set('Accept', 'application/x-www-form-urlencoded')
      .send({ username: config.ADMIN_USERNAME, password: config.ADMIN_PASSWORD})
      .end((err, res) => {
        token = res.text;
        done();
      });
    });

    describe('GET /', () => {
      it('should get CMS page', done => {
        request(app)
          .get('/cms/')
          .set('Accept', 'application/json')
          .set('Authorization', token)
          .expect('Content-Type', /json/)
          .end((err, res) => {
            res.status.should.eql(200);
            done();
          });
      });
    });
  });
});
