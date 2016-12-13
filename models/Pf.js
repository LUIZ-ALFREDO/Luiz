var mongoose = require('mongoose');

var PfSchema = new mongoose.Schema({
  nome: String,
  idade: Number,
  altura: Number,
  peso: Number,
  cor: String,
  nasc: {created:{type: Date, default: Date.now}}
//  Nasc: {created:{type: Date, default: Date.now}}
});

module.exports = mongoose.model('Pf', PfSchema);
