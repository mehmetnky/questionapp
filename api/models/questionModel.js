var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var questionArraySchema = new Schema({
    qOne:{
        type: String,
        required: 'Kindly enter the First Question'
    },
    qTwo:{
        type: String,
        required: 'Kindly enter the Second Question'
    },
    qThree:{
        type: String,
        required: 'Kindly enter the Third Question'
    }
},{ _id: false });

var QuestionSchema = new Schema({
  question: [questionArraySchema],
  answer:{
    type: String,
    required: 'Kindly enter the Answer'
  },
  hint:{
    type: String,
    required: 'Kindly enter the Hint'
  }
},{versionKey: false });

module.exports = mongoose.model('Questions', QuestionSchema);