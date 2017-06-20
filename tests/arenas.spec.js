require('should');

const request = require('supertest');
const app = require('./helpers/mock.app');
const config = require('../src/config/config');
var token = '';
var aCard = require('./helpers/newCard');
var aChest = require('./helpers/newChest');
var aLeague = require('./helpers/newLeague');
var newArena = require('./helpers/newArena');
var newCard = JSON.parse(JSON.stringify(aCard));
var newChest = JSON.parse(JSON.stringify(aChest));
var newLeague = JSON.parse(JSON.stringify(aLeague));
newCard.arena = newArena.number;
newChest.arena = newArena.number;
newLeague.arena = newArena.number;

describe('Arenas.', function() {
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
      before(function() {
        request(app)
          .post('/api/cards')
          .set('Accept', 'application/json')
          .set('Authorization', token)
          .send(newCard)
          .expect('Content-Type', /json/)
          .end((err, res) => {
            newCard._id = res.body._id;
          });

        request(app)
          .post('/api/chests')
          .set('Accept', 'application/json')
          .set('Authorization', token)
          .send(newChest)
          .expect('Content-Type', /json/)
          .end((err, res) => {
            newChest._id = res.body._id;
          });

        request(app)
          .post('/api/leagues')
          .set('Accept', 'application/json')
          .set('Authorization', token)
          .send(newLeague)
          .expect('Content-Type', /json/)
          .end((err, res) => {
            newLeague._id = res.body._id;
          });
      });

      after(function() {
        request(app)
          .del('/api/cards/' + newCard._id)
          .set('Accept', 'application/json')
          .set('Authorization', token)
          .expect('Content-Type', /json/)
          .end((err, res) => {});
        request(app)
          .del('/api/chests/' + newChest._id)
          .set('Accept', 'application/json')
          .set('Authorization', token)
          .expect('Content-Type', /json/)
          .end((err, res) => {});
        request(app)
          .del('/api/leagues/' + newLeague._id)
          .set('Accept', 'application/json')
          .set('Authorization', token)
          .expect('Content-Type', /json/)
          .end((err, res) => {});
        request(app)
          .del('/api/arenas/' + newArena._id)
          .set('Accept', 'application/json')
          .set('Authorization', token)
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
            newArena._id = res.body._id;
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
