var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send([{'name': 'Alex', "role": "Software Engineer"}, {'name': 'Bob', "role": "Software Engineer"}]);
});

module.exports = router;
