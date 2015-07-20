var express = require('express');
var router = express.Router();
var quizController = require('../controllers/questions_controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Quiz' });
});

router.get('/quizes/pregunta', quizController.question);
router.get('/quizes/respuesta', quizController.answer);
router.get('/autores', function(req, res){
	res.render('authors');
});
module.exports = router;
