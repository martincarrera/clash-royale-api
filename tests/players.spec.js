require('should');

const request = require('supertest');
const app = require('./helpers/mock.app');
const config = require('../src/config/config');
var token = '';
var newPlayer = require('./helpers/newPlayer');

describe('Players.', function () {
  this.timeout(5000);

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

  it('should create a new Player', done => {
    request(app)
      .post('/api/players')
      .set('Accept', 'application/json')
      .set('Authorization', token)
      .send(newPlayer)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        res.status.should.eql(201);
        done();
      });
  });

});
