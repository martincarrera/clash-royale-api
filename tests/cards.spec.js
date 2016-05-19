require('should');

const request = require('supertest');
const app = require('./helpers/mock.app');
var newCard = require('./helpers/newCard');

describe('Server API', function () {
  this.timeout(5000);

  describe('/api/cards', () => {
    describe('POST /', () => {
      it('should create a new Card', done => {
        request(app)
          .post('/api/cards')
          .set('Accept', 'application/json')
          .send(newCard)
          .expect('Content-Type', /json/)
          .end((err, res) => {
            res.status.should.eql(201);
            done();
          });
      });

      it('should try to create a duplicated card', done => {
        request(app)
          .post('/api/cards')
          .set('Accept', 'application/json')
          .send(newCard)
          .end((err, res) => {
            res.status.should.eql(500);
            done();
          });
      });
    });

    describe('GET /', () => {
      it('should find all cards', done => {
        request(app)
          .get('/api/cards')
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

      it('should find one card', done => {
        request(app)
          .get('/api/cards/' + newCard._id)
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

      it('should not find one card', done => {
        request(app)
          .get('/api/cards/5734869359daec0c229d31c3')
          .expect('Content-Type', /json/)
          .end((err, res) => {
            res.status.should.eql(404);
            done();
          });
      });

      it('should find card by type', done => {
        request(app)
          .get('/api/cards?rarity='  + newCard.rarity)
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
        var updatedCard = newCard;
        updatedCard.name = 'New Name';
        request(app)
          .put('/api/cards/' + newCard._id)
          .set('Accept', 'application/json')
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
    });

    describe('DELETE /', () => {
      it('should delete a card', done => {
        request(app)
          .delete('/api/cards/' + newCard._id)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .end((err, res) => {
            res.status.should.eql(204);
            done();
          });
      });
    });

  });
});
