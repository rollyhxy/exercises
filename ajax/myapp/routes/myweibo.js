var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('myweibo', { title: 'Express', arr: [4,5,6]});
});


module.exports = router;
