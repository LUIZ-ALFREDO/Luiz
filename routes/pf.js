var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Pf = require('../models/Pf.js');

/* GET /Pf Listagem de usuários. */
router.get('/', function(req, res, next) {
  Pf.find(function (err, pf) {
    if (err) return next(err);
    res.json(pf);
  });
});

/* POST /pf Cadastro de usuário */
router.post('/', function(req, res, next) {
  Pf.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /pf/id  Lista filtrada por um usuário*/
router.get('/:id', function(req, res, next) {
  Pf.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /pf/:id Salva a edição de usuário */
router.put('/:id', function(req, res, next) {
  Pf.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /pf/:id Deletando o usuário a partir do id */
router.delete('/:id', function(req, res, next) {
  Pf.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
