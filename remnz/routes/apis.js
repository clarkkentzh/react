var express = require("express");
var router = express.Router();
var db = require("../db/index");
var login = require("../db/login");

router.get("/",function(req,res){
  res.json("hahahahaahah");
})

router.route("/userlist")
.get(function(req,res){
  db.user.find({},function(err,data){
    res.json(data);
  })
})
router.route("/login")
.post(function(req,res){
  login.user.find({},function(err,data){
    console.log(req.body);
    var m = new login.user(req.body);
    m.save(function(err,data){
      res.json({result:"OK"})
    })
  })
})
module.exports = router;
