let express = require('express');
let router = express.Router();
let trees = require('../db/trees');

router.get('/trees/:id', (req, res, next) => {
  // need to put this in helper function in a module/file
  let foundIt = -1;
  for(let key in trees){
    if (key == req.params.id) {
      foundIt = trees[key];
    }
  }
  res.status(200).json(foundIt)
})

module.exports = router;
