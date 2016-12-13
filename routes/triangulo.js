var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Triangulo = require('../models/Triangulo.js');

/* GET /Triangulo Listagem de usuários. */
router.get('/', function(req, res, next) {
  Triangulo.find(function (err, triangulo) {
    if (err) return next(err);
    res.json(triangulo);
  });
});

/* POST /triangulo Cadastro de usuário */
router.post('/', function(req, res, next) {
  Triangulo.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /triangulo/id  Lista filtrada por um usuário*/
router.get('/:id', function(req, res, next) {
  Triangulo.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /triangulo/:id Salva a edição de usuário */
router.put('/:id', function(req, res, next) {
  Triangulo.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /triangulo/:id Deletando o usuário a partir do id */
router.delete('/:id', function(req, res, next) {
  Triangulo.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
