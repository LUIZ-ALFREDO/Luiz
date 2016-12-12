var mongoose = require('mongoose');

var QuadradoSchema = new mongoose.Schema({
  nome: String,
  base: Number,
  altura: Nuber
});

module.exports = mongoose.model('Quadrado', QuadradoSchema);
