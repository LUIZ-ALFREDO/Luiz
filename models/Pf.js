var mongoose = require('mongoose');

var PfSchema = new mongoose.Schema({
  nome: String,
  Idade: Number,
  altura: Number,
  peso: Number,
  cor: String,
  Nasc: {created:{type: Date, default: Date.now}}
});

module.exports = mongoose.model('Pf', PfSchema);
