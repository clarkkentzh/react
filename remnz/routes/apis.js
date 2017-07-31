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
  login.user.find({username:req.body.username},function(err,data){
    if(data){
      res.json({result:"用户已存在,请重新输入"});
      // setTimeout(function(){
      //   res.redirect("/register");
      // },1000)
    }else {
      var m = new login.user(req.body);
      m.save(function(err,data){
        res.redirect("/");
      })
    }
  })
})
.put(function(req,res){
  res.json({
    id:123,
    score:54
  })
})

router.route("/login")
.post(function(req,res){
  login.user.findOne({username:req.body.username},function(err,data){
      console.log(data);
      if(data && data.password == req.body.password){
        res.json({result:"OKaaaaa"});
      }else {
        res.redirect("/");
      }
  })
})

module.exports = router;
