var mongoose = require('mongoose');

var PfSchema = new mongoose.Schema({
  nome: String,
  idade: Number,
  altura: Number,
  peso: Number,
  cor: {nome:String},
  nasc: Date 
//   {created:{type: Date, default: Date.now}}
});

module.exports = mongoose.model('Pf', PfSchema);
