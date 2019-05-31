var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  email:{
    type: String,
    required: 'Kindly enter the E-Mail'
  },
  score:{
    type: Number,
    required: 'Kindly enter the Score'
  }
},{versionKey: false });

module.exports = mongoose.model('Users', UserSchema);