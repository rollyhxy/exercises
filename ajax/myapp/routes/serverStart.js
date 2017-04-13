var express = require('express');
var router = express.Router();

router.get('/',function (req,res,next) {
	res.render('serverStart',{a:1,b:2});//render的第一个参数是views下文件名
});

router.get('/one',function (req, res, next) {
	console.log(req.query);
	console.log(req.body);

	res.send({
		success:false,
		data:'hxyyy',
		message:''
	});
});

router.post('/one',function (req, res, next) {
	console.log(req.query);
	console.log(req.body);

	res.send({
		success:true,
		data:'hxy',
		message:''
	});
});



module.exports = router;