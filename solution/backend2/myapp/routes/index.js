var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
});

router.get('/answer', function(req, res, next) {
	
	var results = [{"name":"app1", "status":"critical"},
		{"name":"app2", "status":"major"},
		{"name":"app3", "status":"critical"},
		{"name":"app4", "status":"ok"},
		];

	res.json({
		result: results
	});
});

module.exports = router;
