var ticker = require('./ticker.service')
var testing = require('./test')

var routeObj = {
	configure: function(app) {

		app.get('/viewxlm', function (req,res) {
			testing.xlmtobtc(req,res);
		});

		app.get('/vieweurt', function (req,res) {
			testing.xlmtoeurt(req,res);
		});

		app.get('/vieweqd', function (req,res) {
			testing.xlmtoeqd(req,res);
		});

		app.get('/viewdemo', function (req,res) {
			testing.xlmtodemo(req,res);
		});	

		app.get('/viewjpy', function (req,res) {
			testing.xlmtojpy(req,res);
		});	

		app.get('/viewphp', function (req,res) {
			testing.xlmtophp(req,res);
		});	

		app.get('/viewcny', function (req,res) {
			testing.xlmtocny(req,res);
		});		

		app.get('/viewbtctoeurt', function (req,res) {
			testing.btctoeurt(req,res);
		});

		app.get('/viewbtctoeqd', function (req,res) {
			testing.btctoeqd(req,res);
		});

		app.get('/vieweurttophp', function (req,res) {
			testing.eurttophp(req,res);
		});

		app.get('/vieworderbook', function(req,res){

			ticker.viewOrderBook(req,res);

		});

	}


}


module.exports = routeObj;