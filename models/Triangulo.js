var mongoose = require('mongoose');

var TrianguloSchema = new mongoose.Schema({
  nome: String,
  base: Number,
  altura: Number,
  peso: number,
  cor: string
});

module.exports = mongoose.model('Triangulo', TrianguloSchema);
