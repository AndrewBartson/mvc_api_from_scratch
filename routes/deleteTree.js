let express = require('express');
let router = express.Router();
let trees = require('../db/trees');

router.delete('/trees/:id', (req, res, next) => {
  let deleteIt = -1;
  for(let key in trees){
    if (key == req.params.id) {
      deleteIt = trees[key];
      delete trees[key];
    }
  }
  res.status(200).json(deleteIt)
})

module.exports = router;

//if (!dog) return next({ status: 404, message: `Could not find dog with id of ${id}` })

//const index = dogs.indexOf(dog)
//dogs.splice(index, 1)
