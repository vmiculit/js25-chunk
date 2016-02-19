// Requires
var express = require('express')
	parser = require('body-parser')
	logger = require('morgan')

// Controllers
var troller = require('./controllers/mainController.js')
var api = require('./controllers/apiController.js')

// Create Express App Object

var app = express()

// App config
app.use(logger('dev'))
app.use(parser.json())
app.use(parser.urlencoded({ extended : true}))
app.use(express.static(__dirname + '/public'))

// Routes

app.get('/', troller.getIndex)

// app.get('/api/teamMaker', api.getTeams)
app.post('/api/teamMaker', api.createTeams, api.sendTeams)

// Create Server and Listen

var port = 3000
app.listen(port, function(){
	console.log('Server is UP on port: ' + port);

})