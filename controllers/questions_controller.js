exports.question = function(req, res){
	res.render('quizes/pregunta', {pregunta: "Capital de República Dominicana", title: "Quiz: Preguntas"});
};
exports.answer = function(req, res){
	var answer = 'Incorrecto';
	if(req.query.respuesta.toLowerCase()==='santo domingo'){
		answer = 'Correcto';
	}
	res.render('quizes/respuesta', {respuesta:answer});
};