var express = require("express");
var router = express.Router();
var db = require("../db/index");
var login = require("../db/login");

router.get("/",function(req,res){
  res.json("hahahahaahah");
})

router.route("/userlist")
.get(function(req,res){
  login.user.find({},function(err,data){
    console.log("====",data);
    res.json(data);
  })
})

router.route("/register")
.post(function(req,res){
  login.user.find({},function(err,data){
    console.log(req.body);
    var m = new login.user(req.body);
    m.save(function(err,data){
      // res.json({result:"OK"})
      res.redirect
    })
  })
})
.put(function(req,res){
  res.json({
    id:123,
    score:54
  })
})

module.exports = router;
