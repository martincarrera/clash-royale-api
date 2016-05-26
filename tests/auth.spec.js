require('should');

const request = require('supertest');
const app = require('./helpers/mock.app');
const config = require('../src/config/config');

describe('Authentication.', function () {
  this.timeout(5000);


  describe('/api/authenticate', () => {
    describe('POST /', () => {
      it('should try to authenticate with no username', done => {
        var user = { password: 'asd' };
        request(app)
          .post('/api/authenticate')
          .set('Accept', 'application/json')
          .send(user)
          .expect('Content-Type', /json/)
          .end((err, res) => {
            res.status.should.eql(401);
            res.error.text.should.eql('Authentication failed. Username not provided.');
            res.should.be.json;
            done();
          });
      });
      it('should try to authenticate with no password', done => {
        var user = { username: config.ADMIN_USERNAME };
        request(app)
          .post('/api/authenticate')
          .set('Accept', 'application/json')
          .send(user)
          .expect('Content-Type', /json/)
          .end((err, res) => {
            res.status.should.eql(401);
            res.error.text.should.eql('Authentication failed. Password not provided.');
            res.should.be.json;
            done();
          });
      });
      it('should try to authenticate with wrong username', done => {
        var user = { username: 'wrongUsername', password: config.ADMIN_PASSWORD };
        request(app)
          .post('/api/authenticate')
          .set('Accept', 'application/json')
          .send(user)
          .expect('Content-Type', /json/)
          .end((err, res) => {
            res.status.should.eql(401);
            res.error.text.should.eql('Authentication failed. Invalid username.');
            res.should.be.json;
            done();
          });
      });
      it('should try to authenticate with wrong password', done => {
        var user = { username: config.ADMIN_USERNAME, password: 'wrongPassword' };
        request(app)
          .post('/api/authenticate')
          .set('Accept', 'application/json')
          .send(user)
          .expect('Content-Type', /json/)
          .end((err, res) => {
            res.status.should.eql(401);
            res.error.text.should.eql('Authentication failed. Invalid password.');
            res.should.be.json;
            done();
          });
      });
      it('should authenticate OK.', done => {
        var user = { username: config.ADMIN_USERNAME, password: config.ADMIN_PASSWORD };
        request(app)
          .post('/api/authenticate')
          .set('Accept', 'application/json')
          .send(user)
          .expect('Content-Type', /json/)
          .end((err, res) => {
            res.status.should.eql(200);
            res.should.be.json;
            done();
          });
      });
    });
  });
});
