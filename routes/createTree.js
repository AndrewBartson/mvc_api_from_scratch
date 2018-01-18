let express = require('express');
let router = express.Router();
const uuid = require('uuid');
let randomId = require('random-id');
let trees = require('../db/trees');

router.post('/trees', (req, res, next) => {

  let { species, variety, section, row } = req.body
  if (!species || !variety || !section || !row) return next({ status: 400, message: `Incomplete data` })
  let newId = randomId(7);
  let tree = { id: uuid(), species, variety, section, row }
  trees[newId] = tree;
  res.status(201).json(tree)
})

module.exports = router;
