require('should');

const request = require('supertest');
const app = require('./helpers/mock.app');
const config = require('../src/config/config');
var token = '';
var aCard = require('./helpers/newCard');
var newCard = JSON.parse(JSON.stringify(aCard));
var updatedCard = JSON.parse(JSON.stringify(newCard));
updatedCard.idName = (JSON.parse(JSON.stringify(updatedCard.name.toLowerCase()))).replace(/ /g, '-').replace(/\./g, '');

describe('Cards.', function () {
  this.timeout(5000);

  describe('/api/cards', () => {
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
    describe('POST /', () => {
      it('should create a new Card', done => {
        request(app)
          .post('/api/cards')
          .set('Accept', 'application/json')
          .set('Authorization', token)
          .send(newCard)
          .expect('Content-Type', /json/)
          .end((err, res) => {
            res.status.should.eql(201);
            newCard.idName = res.body.idName;
            done();
          });
      });

      it('should try to create a duplicated card', done => {
        request(app)
          .post('/api/cards')
          .set('Accept', 'application/json')
          .set('Authorization', token)
          .send(newCard)
          .end((err, res) => {
            res.status.should.eql(500);
            done();
          });
      });

      it('should try to create a new Card with no token', done => {
        request(app)
          .post('/api/cards')
          .set('Accept', 'application/json')
          .send(newCard)
          .expect('Content-Type', /json/)
          .end((err, res) => {
            res.status.should.eql(401);
            done();
          });
      });

      it('should try to create a new Card with an invalid token', done => {
        request(app)
          .post('/api/cards')
          .set('Accept', 'application/json')
          .set('Authorization', '111111111111111111111111111111111111.111111111111111111111111111111111111111111111111111111111111111111111111.1111111111111111111111111111111111111111111')
          .send(newCard)
          .expect('Content-Type', /json/)
          .end((err, res) => {
            res.status.should.eql(401);
            done();
          });
      });
    });

    describe('GET /', () => {
      it('should find all cards', done => {
        request(app)
          .get('/api/cards')
          .set('Authorization', token)
          .expect('Content-Type', /json/)
          .end((err, res) => {
            newCard._id = res.body[0]._id;
            res.body[0].name.should.eql(newCard.name);
            res.body[0].rarity.should.eql(newCard.rarity);
            res.body[0].type.should.eql(newCard.type);
            res.body[0].description.should.eql(newCard.description);
            res.body[0].arena.should.eql(newCard.arena);
            res.body[0].elixirCost.should.eql(newCard.elixirCost);
            res.status.should.eql(200);
            done();
          });
      });

      it('should find one card by id', done => {
        request(app)
          .get('/api/cards/' + newCard._id)
          .set('Authorization', token)
          .expect('Content-Type', /json/)
          .end((err, res) => {
            res.body.name.should.eql(newCard.name);
            res.body.rarity.should.eql(newCard.rarity);
            res.body.type.should.eql(newCard.type);
            res.body.description.should.eql(newCard.description);
            res.body.arena.should.eql(newCard.arena);
            res.body.elixirCost.should.eql(newCard.elixirCost);
            res.status.should.eql(200);
            done();
          });
      });

      it('should find one card by idName', done => {
        request(app)
          .get('/api/cards/' + newCard.idName)
          .set('Authorization', token)
          .expect('Content-Type', /json/)
          .end((err, res) => {
            res.body.name.should.eql(newCard.name);
            res.body.rarity.should.eql(newCard.rarity);
            res.body.type.should.eql(newCard.type);
            res.body.description.should.eql(newCard.description);
            res.body.arena.should.eql(newCard.arena);
            res.body.elixirCost.should.eql(newCard.elixirCost);
            res.status.should.eql(200);
            done();
          });
      });

      it('should not find one card by id', done => {
        request(app)
          .get('/api/cards/111111111111111111111111')
          .set('Authorization', token)
          .expect('Content-Type', /json/)
          .end((err, res) => {
            res.status.should.eql(404);
            done();
          });
      });

      it('should not find one card by idName', done => {
        request(app)
          .get('/api/cards/some-name-here')
          .set('Authorization', token)
          .expect('Content-Type', /json/)
          .end((err, res) => {
            res.status.should.eql(404);
            done();
          });
      });

      it('should find card by type', done => {
        request(app)
          .get('/api/cards?rarity='  + newCard.rarity)
          .set('Authorization', token)
          .expect('Content-Type', /json/)
          .end((err, res) => {
            res.body[0].name.should.eql(newCard.name);
            res.body[0].rarity.should.eql(newCard.rarity);
            res.body[0].type.should.eql(newCard.type);
            res.body[0].description.should.eql(newCard.description);
            res.body[0].arena.should.eql(newCard.arena);
            res.body[0].elixirCost.should.eql(newCard.elixirCost);
            res.status.should.eql(200);
            done();
          });
      });
    });

    describe('PUT /', () => {
      it('should update a card', done => {
        updatedCard.name = 'New Name';
        request(app)
          .put('/api/cards/' + newCard._id)
          .set('Accept', 'application/json')
          .set('Authorization', token)
          .send(updatedCard)
          .expect('Content-Type', /json/)
          .end((err, res) => {
            newCard._id = res.body._id;
            res.body.name.should.eql(updatedCard.name);
            res.body.rarity.should.eql(newCard.rarity);
            res.body.type.should.eql(newCard.type);
            res.body.description.should.eql(newCard.description);
            res.body.arena.should.eql(newCard.arena);
            res.body.elixirCost.should.eql(newCard.elixirCost);
            res.status.should.eql(200);
            done();
          });
      });

      describe('Random deck', () => {
        it('should get a random deck of cards', done => {
          request(app)
            .get('/api/random-deck')
            .set('Authorization', token)
            .expect('Content-Type', /json/)
            .end((err, res) => {
              res.status.should.eql(200);
              res.body.should.not.be.empty();
              done();
            });
        });
      });

      it('should try to update an invalid card', done => {
        updatedCard._id = '111111111111111111111111';
        request(app)
          .put('/api/cards/' + updatedCard._id)
          .set('Accept', 'application/json')
          .set('Authorization', token)
          .send(updatedCard)
          .expect('Content-Type', /json/)
          .end((err, res) => {
            res.status.should.eql(404);
            done();
          });
      });
    });

    describe('DELETE /', () => {
      it('should delete a card', done => {
        request(app)
          .del('/api/cards/' + newCard._id)
          .set('Accept', 'application/json')
          .set('Authorization', token)
          .expect('Content-Type', /json/)
          .end((err, res) => {
            res.status.should.eql(204);
            done();
          });
      });
    });

    describe('DELETE /', () => {
      it('should try to delete an invalid card', done => {
        request(app)
          .del('/api/cards/' + newCard._id)
          .set('Accept', 'application/json')
          .set('Authorization', token)
          .expect('Content-Type', /json/)
          .end((err, res) => {
            res.status.should.eql(404);
            done();
          });
      });
    });

  });

});
