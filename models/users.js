const mongoose = require('mongoose');

const UsersModel = mongoose.model(
  'Users',
  new mongoose.Schema({
    name: { type: String, default: '' },
    passwd: { type: String, default: '' },
    tags: { type: Array, default: [] },
    update: { type: Date, default: Date.now },
  })
);

module.exports = UsersModel;