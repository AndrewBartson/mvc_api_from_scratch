let express = require('express');
let router = express.Router();
let trees = require('../db/trees');

router.patch('/trees/:id', (req, res, next) => {
  let targetTree = -1;
  for(let key in trees){
    if (key == req.params.id) {
      targetTree = trees[key];
    }
  }
  for (var key in req.body) {
    targetTree[key] = req.body[key]
  }
  res.status(200).json(targetTree)
})

module.exports = router;
