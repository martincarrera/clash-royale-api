'use strict';

class Model {

  constructor(SchemaModel) {
    this.SchemaModel = SchemaModel;
  }

  create(input) {
    var newSchemaModel = new this.SchemaModel(input);
    return newSchemaModel.saveAsync();
  }

  update(id, updatedModel) {
    if (!id) {
      throw new Error('Missing id parametter');
    }

    return this.SchemaModel.findByIdAndUpdate(id, updatedModel, { new: true })
      .execAsync();
  }

  find(query, relationships) {
    return this.SchemaModel.find(query)
      .populate(relationships || '')
      .execAsync();
  }

  findOne(query, relationships) {
    return this.SchemaModel.findOne(query)
      .populate(relationships || '')
      .execAsync();
  }

  findById(id, relationships) {
    if (!id) {
      throw new Error('Missing id parametter');
    }

    return this.SchemaModel
      .findById(id)
      .populate(relationships || '')
      .execAsync();
  }

  remove(id) {
    if (!id) {
      throw new Error('Missing id parametter');
    }

    return this.SchemaModel.findByIdAndRemove(id)
      .execAsync();
  }
}

module.exports = Model;
