module.exports = function(app) {
  var questionList = require('../controllers/questionController');
  // questionList Routes
  app.route('/questions')
    .get(questionList.list_all_questions)
    .post(questionList.create_a_question)
    /*.delete(questionList.delete_questions)*/;

  app.route('/questions/:questionId')
    .get(questionList.read_a_question)
    .put(questionList.update_a_question)
    .delete(questionList.delete_a_question);
    
  app.route('/logout', function(req, res, next) {
    if (req.session) {
      // delete session object
      req.session.destroy(function(err) {
        if(err) {
          return next(err);
        } else {
          return res.redirect('/');
        }
      });
    }
  });

  

    

};
