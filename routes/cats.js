const express = require('express');
const router = express.Router();

const getAllCats = require('../db/db').getAllCats

/* GET users listing. */
router.get('/', function(req, res, next) {
  getAllCats()
    .then(cats => res.json({cats}))
    .catch(err => res.json({err}))
});

module.exports = router;
