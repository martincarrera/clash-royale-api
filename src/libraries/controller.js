export default class Controller {

  constructor(model) {
    this.model = model;
  }

  find(req, res, next) {
    this.model.find(req.query)
    .then(collection => res.status(200).json(collection))
    .catch(err => next(err));
  }

  findOne(req, res, next) {
    this.model.findOne(req.id)
    .then(doc => res.status(200).json(doc))
    .catch(err => next(err));
  }

  findById(req, res, next) {
    const id = req.params.id;

    this.model.findById(id)
    .then(doc => {
      if (!doc) return next(404);
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
      if (!doc) return next(404);
      return res.status(200).json(doc);
    })
    .catch(err => next(err));
  }

  remove(req, res, next) {
    const id = req.params.id;

    this.model.remove(id)
    .then(doc => {
      if (!doc) return next(404);
      return res.sendStatus(204);
    })
    .catch(err => next(err));
  }
}
