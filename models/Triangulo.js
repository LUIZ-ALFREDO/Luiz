var mongoose = require('mongoose');

var TrianguloSchema = new mongoose.Schema({
  nome: String,
  base: Number,
  altura: Number,
  peso: Number,
  cor: String
});

module.exports = mongoose.model('Triangulo', TrianguloSchema);
