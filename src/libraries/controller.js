class Controller {

  constructor(model) {
    this.model = model;
  }

  find(req, res, next) {
    this.model.find(req.query)
    .then(collection => res.status(200).json(collection))
    .catch(err => next(err));
  }

  findById(req, res, next) {
    const id = req.params.id;

    this.model.findById(id)
    .then(doc => {
      if (!doc) return res.status(404).send({ message: 'Wrong id, object not found.' });
      return res.status(200).json(doc);
    })
    .catch(err => next(err));
  }

  create(req, res, next) {
    this.model.create(req.body)
    .then(doc => res.status(201).json(doc))
    .catch(err => next(err));
  }

  update(req, res, next) {
    const id = req.params.id;
    const input = req.body;
    this.model.update(id, input)
    .then(doc => {
      if (!doc) res.status(404).send({ message: 'Wrong id, object not found.' });
      return res.status(200).json(doc);
    })
    .catch(err => next(err));
  }

  remove(req, res, next) {
    const id = req.params.id;

    this.model.remove(id)
    .then(doc => {
      if (!doc) res.status(404).send({ message: 'Wrong id, object not found.' });
      return res.sendStatus(204);
    })
    .catch(err => next(err));
  }
}

module.exports = Controller;
