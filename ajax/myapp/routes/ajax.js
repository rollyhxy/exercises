var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.render('ajax', {lmj: 'hxy', a: {b: 1}});
});

router.get('/api', function(req, res, next) {
	console.log(req.query)
	console.log(req.body)
  res.send({
  	success: false,
  	data: 123,
  	message: ''
  });
});

router.post('/api', function(req, res, next) {
	console.log(req.query)
	console.log(req.body)
	
  res.send({
  	success: false,
  	data: 123123,
  	message: ''
  });
});

module.exports = router;