var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var model = mongoose.model;

var schema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  nickname: String
});

module.exports = model("User", schema);
