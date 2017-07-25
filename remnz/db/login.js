var mongoose = require("./mongoose");

var Schema = mongoose.Schema;
var answerSchema = new Schema({
  username: String,
  password: String
});


module.exports.user = mongoose.model("logins", answerSchema);
