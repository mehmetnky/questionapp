var mongoose = require('mongoose'),
Task = mongoose.model('Questions');

exports.list_all_questions = function(req, res) {
Task.find({}, function(err, task) {
  if (err)
    res.send(err);
  res.json(task);
});
};


exports.create_a_question = function(req, res,err) {
var new_task = new Task(req.body);
//console.log(req.body);
  new_task.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

/*exports.delete_users = function(req, res) {
Task.deleteMany(req.params.name,function(err, task) {
  if (err)
    res.send(err);
  res.json({ message: 'All Users Successfully Deleted' });
});
};*/

exports.read_a_question = function(req, res) {
Task.findById(req.params.questionId, function(err, task) {
  if (err)
    res.send(err);
  res.json(task);
});
};


exports.update_a_question = function(req, res) {
Task.findOneAndUpdate({_id: req.params.questionId}, req.body, {new: true}, function(err, task) {
  if (err)
    res.send(err);
  res.json(task);
});
};


exports.delete_a_question = function(req, res) {
Task.deleteOne({
  _id: req.params.questionId
}, function(err, task) {
  if (err)
    res.send(err);
  res.json({ message: 'Question successfully deleted' });
});
};
