var mongoose = require("mongoose");
// var url = ("mongodb://react:react@ds151752.mlab.com:51752/clark");
var url = ("mongodb://127.0.0.1:27017/zhao");
mongoose.Promise = global.Promise;
mongoose.connect(url);
var db = mongoose.connection;
db.on("error",function(){
  console.log("Connect is error!");
});

db.on("open",function(){
  console.log("Connect is ok!");
});

module.exports = mongoose;
