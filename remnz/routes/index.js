var express = require('express');
var router = express.Router();
var login = require("../db/login");

/* GET home page. */
router.get('/', function(req, res, next) {
  // login.user.find({},function(err,data){
  //
  // })
  res.render('index', { title: 'Express'});
});


module.exports = router;
