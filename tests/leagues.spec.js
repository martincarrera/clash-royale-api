require('should');

const request = require('supertest');
const app = require('./helpers/mock.app');
const config = require('../src/config/config');
var token = '';
var aChest = require('./helpers/newChest');
var newLeague = require('./helpers/newLeague');
var newChest = JSON.parse(JSON.stringify(aChest));
newChest.arena = newLeague.arena;
newChest.league = newLeague.number;

describe('Leagues.', function () {
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

  describe('/api/leagues', () => {
    describe('POST /', () => {
      before(function(){
        request(app)
          .post('/api/chests')
          .set('Accept', 'application/json')
          .set('Authorization', token)
          .send(newChest)
          .expect('Content-Type', /json/)
          .end((err, res) => {
            newChest._id = res.body._id;
          });
      });

      after(function() {
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
      });

      it('should create a new League', done => {
        request(app)
          .post('/api/leagues')
          .set('Accept', 'application/json')
          .set('Authorization', token)
          .send(newLeague)
          .expect('Content-Type', /json/)
          .end((err, res) => {
            res.status.should.eql(201);
            newLeague._id = res.body._id;
            done();
          });
      });
    });

    describe('GET /', () => {
      it('should find all Leagues', done => {
        request(app)
          .get('/api/leagues')
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
