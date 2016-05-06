'use strict';

class Controller {

  constructor(model) {
    this.model = model;
  }

  find(req, res, next) {
    this.model.find()
      .then(collection => {
        res.status(200).json(collection);
      })
      .catch(err => next(err));
  }

  findOne(req, res, next) {
    this.model.findOne()
    .then(doc => {
      res.status(200).json(doc);
    })
    .catch(err => next(err));
  }

  findById(req, res, next) {
    var id = req.params.id;

    this.model.findById(id)
    .then(doc => {
      if (!doc) {
        return next(404);
      }
      res.status(200).json(doc);
    })
    .catch(err => next(err));
  }

  create(req, res, next) {
    this.model.create(req.body)
    .then(doc => {
      res.status(201).json(doc);
    })
    .catch(err => next(err));
  }

  update(req, res, next) {
    var id = req.params.id;
    var input = req.body;

    this.model.update(id, input)
    .then(doc => {
      if (!doc) {
        return next(404);
      }
      res.status(200).json(doc);
    })
    .catch(err => next(err));
  }

  remove(req, res, next) {
    var id = req.params.id;

    this.model.remove(id)
    .then(doc => {
      if (!doc) {
        return next(404);
      }
      res.status(204).json(doc);
    })
    .catch(err => next(err));
  }
}

module.exports = Controller;
