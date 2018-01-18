let express = require('express');
let router = express.Router();
let trees = require('../db/trees');

router.get('/trees', (req, res, next) => {
  res.status(200).json(trees)
})

module.exports = router
