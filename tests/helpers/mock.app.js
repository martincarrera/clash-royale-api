const mockgoose = require('mockgoose');
const mongoose = require('mongoose');
mockgoose(mongoose);

const app = require('../../src/app')(mongoose);

module.exports = app;
