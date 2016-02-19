
var chunkModel = require('../models/chunkModel.js')


var teams

var createTeams = function(req, res, next){
	teams = chunkModel.makeTeams(req.body.people, req.body.groups)
	next()
}

var sendTeams = function(req, res){
	res.send(teams)
}


module.exports = {

	createTeams : createTeams,
	sendTeams	: sendTeams

}