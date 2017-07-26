var mongoose = require('mongoose');

var url = ('mongodb://remn:remn@ds163301.mlab.com:63301/remn');
// var url = ("mongodb://127.0.0.1:27017/zhao");

mongoose.connect(url);

var db = mongoose.connection;

db.once('open', function(){
  console.log('connect db ok!');
})

var Schema = mongoose.Schema;

var userShema = new Schema({
  name: { type: String },
  password: { type: String }
});


module.exports.user = mongoose.model('users', userShema);
