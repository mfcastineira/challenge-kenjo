const express = require('express');
const AlbumDbMicroservice = require('./album.microservice');
const albumDbMicroservice = new AlbumDbMicroservice();

const albumDbRouter = express.Router();

albumDbRouter.use(express.json({}));

// CREATE
albumDbRouter.post('/create',
  (req, res, next) => {
    albumDbMicroservice.create(req, res, next);
  });

// READ
albumDbRouter.get('/album',
  (req, res, next) => {
    albumDbMicroservice.find(req, res, next);
  });

// UPDATE
const newLocal = albumDbRouter.put('/:id',
  (req, res, next) => {
    albumDbMicroservice.updateById(req, res, next);
  });

// DELETE
albumDbRouter.delete('/:id',
  (req, res, next) => {
    albumDbMicroservice.deleteById(req, res, next);
  });

module.exports = albumDbRouter;