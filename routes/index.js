var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/createZone', function(req, res, next){
  res.render('createZone')
})

router.get('/createComment', function(req, res, next){
  res.render('createComment')
})
module.exports = router;
