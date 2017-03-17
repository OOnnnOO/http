var express = require('express');
var router = express.Router();

// HTTP Status code
router.get('/:code', function (req, res, next) {
  if ((req.params.code) > 99 && req.params.code < 600) {
    res.sendStatus(req.params.code).end();
  } else {
    res.sendStatus(500).end();
  }

});
module.exports = router;
