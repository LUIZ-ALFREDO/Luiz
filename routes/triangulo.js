var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Quadrado = require('../models/Triangulo.js');

/* GET /quadrado Listagem de usuários. */
router.get('/', function(req, res, next) {
  Quadrado.find(function (err, quadrado) {
    if (err) return next(err);
    res.json(quadrado);
  });
});

/* POST /quadrado Cadastro de usuário */
router.post('/', function(req, res, next) {
  Quadrado.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /quadrado/id  Lista filtrada por um usuário*/
router.get('/:id', function(req, res, next) {
  Quadrado.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /quadrado/:id Salva a edição de usuário */
router.put('/:id', function(req, res, next) {
  Quadrado.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /quadrado/:id Deletando o usuário a partir do id */
router.delete('/:id', function(req, res, next) {
  Quadrado.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
