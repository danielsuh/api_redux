var peps = require('./../controllers/peoples.js');
module.exports = function(app) {
	app.get('/person', function(req, res) {
		peps.show(req, res);
	})
	app.post('/person/new', function(req, res){
		peps.create(req, res);
	})
	app.post('/person/remove', function(req, res){
		peps.destroy(req, res);
	})
};