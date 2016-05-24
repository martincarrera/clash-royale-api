require('should');

const request = require('supertest');
const app = require('./helpers/mock.app');
const config = require('../src/config/config');
var token = '';
var newCard = require('./helpers/newCard');
var newArena = require('./helpers/newArena');
var newChest = require('./helpers/newChest');
newCard.arena = newArena.number;
newChest.arena = newArena.number;

describe('Server API', function () {
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

  describe('/api/arenas', () => {
    describe('POST /', () => {
      before(function(){
        request(app)
          .post('/api/cards')
          .set('Accept', 'application/json')
          .set('Authorization', token)
          .send(newCard)
          .expect('Content-Type', /json/)
          .end((err, res) => {});

        request(app)
          .post('/api/chests')
          .set('Accept', 'application/json')
          .set('Authorization', token)
          .send(newChest)
          .expect('Content-Type', /json/)
          .end((err, res) => {});
      });

      it('should create a new Arena', done => {
        request(app)
          .post('/api/arenas')
          .set('Accept', 'application/json')
          .set('Authorization', token)
          .send(newArena)
          .expect('Content-Type', /json/)
          .end((err, res) => {
            res.status.should.eql(201);
            done();
          });
      });
    });
    describe('GET /', () => {
      it('should find all Arena', done => {
        request(app)
          .get('/api/arenas')
          .set('Accept', 'application/json')
          .set('Authorization', token)
          .send(newArena)
          .expect('Content-Type', /json/)
          .end((err, res) => {
            res.status.should.eql(200);
            done();
          });
      });
    });
  });
});
