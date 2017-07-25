var express = require('express');
var bcrypt = require('bcrypt');
var router = express.Router();
var login = require('../db/login');
var salt = 10;

router.get('/', (req, res, next) => {
  res.render('register', {title: 'register'});
});

router.post('/', (req, res, next) => {
  console.log(req.body);
  bcrypt.hash(req.body.password, salt, (err, hash) => {
    login.user.findOne({name:req.body.username},function(err,data){
      if(data){
        console.log(data);
        // res.send("error");
      }else {
        var user = new login.user ({
          username : req.body.username,
          password : hash
        });

        user.save(function(err, data){
          console.log("++++",data);
          res.redirect('/');
        });
      }
    })
  });

});

module.exports = router;
