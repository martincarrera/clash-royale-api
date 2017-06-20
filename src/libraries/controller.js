class Controller {

  constructor(model) {
    this.model = model;
  }

  find(req, res, next) {
    this.model.find(req.query)
    .then(collection => res.status(200).json(collection))
    .catch(err => next(err));
  }

  findSorted(req, res, next) {
    this.model.find(req.query)
    .then(collection => {
      collection.sort((a, b) => a.order - b.order);
      res.status(200).json(collection);
    })
    .catch(err => next(err));
  }

  findByIdOrNameId(req, res, next) {
    const id = req.params.id;
    if (this.isValidObjectID(id)) {
      this.findById(req, res, next);
    } else {
      this.findByNameId(req, res, next);
    }
  }

  findByNameId(req, res, next) {
    this.model.findOne({ idName: req.params.id })
    .then(doc => {
      if (!doc) return res.status(404).send({ message: 'Wrong id, object not found.' });
      return res.status(200).json(doc);
    })
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

  isValidObjectID(objectId) {
    const str = objectId.concat('');
    const len = str.length;
    if (len === 12 || len === 24) {
      return /^[0-9a-fA-F]+$/.test(str);
    }
    return false;
  }
}

module.exports = Controller;
