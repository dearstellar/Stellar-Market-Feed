var StellarSdk = require('stellar-sdk');
StellarSdk.Network.usePublicNetwork();
var server = new StellarSdk.Server('https://horizon.stellar.org');

var btc = new StellarSdk.Asset('BTC', 'GATEMHCCKCY67ZUCKTROYN24ZYT5GK4EQZ65JJLDHKHRUZI3EUEKMTCH');
var eurt = new StellarSdk.Asset('EURT', 'GAP5LETOV6YIE62YAM56STDANPRDO7ZFDBGSNHJQIYGGKSMOZAHOOS2S');
var eqd = new StellarSdk.Asset('EQD', 'GCGEQJR3E5BVMQYSNCHPO6NPP3KOT4VVZHIOLSRSNLE2GFY7EWVSLLTN');
var demo = new StellarSdk.Asset('DEMO', 'GBAMBOOZDWZPVV52RCLJQYMQNXOBLOXWNQAY2IF2FREV2WL46DBCH3BE');
var jpy = new StellarSdk.Asset('JPY', 'GBVAOIACNSB7OVUXJYC5UE2D4YK2F7A24T7EE5YOMN4CE6GCHUTOUQXM');
var php = new StellarSdk.Asset('PHP', 'GBUQWP3BOUZX34TOND2QV7QQ7K7VJTG6VSE7WMLBTMDJLLAW7YKGU6EP');
var cny = new StellarSdk.Asset('CNY', 'GAREELUB43IRHWEASCFBLKHURCGMHE5IF6XSE7EXDLACYHGRHM43RFOX');
var xlm = new StellarSdk.Asset.native();
var currencies = [btc,eurt,eqd,demo,jpy,php,cny,xlm];


function sortBids(argument) {
	
	argument.sort (function (a,b)
	
		{return a.price - b.price} 

	);

	return argument;
	
}


var orderbook = {

	xlmtobtc: function(req,res){

		var selling = xlm;
		var buying = btc;

		server.orderbook(selling, buying)
		  .call()
	      .then(function(resp) { 
		   	console.log(resp);

		  	var sortedBids = sortBids(resp.bids);

		  	//res.send(resp);

		  	// testing bids and asks lowest and highest values
		  	console.log(resp.bids[0].price);
		  	console.log(resp.bids[resp.bids.length-1].price);
			console.log(resp.asks[0].price);
		  	console.log(resp.asks[resp.asks.length-1].price);


		  	// arrray you are sending out
		  	var apilist = [];

		  	// lowest bid
		  	apilist[0] = resp.bids[0].price;

		  	// highest bid
		  	apilist[1] = resp.bids[resp.bids.length-1].price;

		  	// lowest ask
		  	apilist[2] = resp.asks[0].price;

		  	// highest ask
		  	apilist[3] = resp.asks[resp.asks.length-1].price;

		  	console.log(apilist);
		  	res.send(apilist);
		
			})

		  .catch(function(err) { 
		  	console.log(err); 
		   	res.send(err);
		   })
  
	},
 
	xlmtoeurt: function(req,res){

			var selling = xlm;
			var buying = eurt;

			server.orderbook(selling, buying)
			  .call()
		      .then(function(resp) { 
			   	console.log(resp);

			  	var sortedBids = sortBids(resp.bids);

			  	//res.send(resp);

			  	// testing bids and asks lowest and highest values
			  	console.log(resp.bids[0].price);
			  	console.log(resp.bids[resp.bids.length-1].price);
				console.log(resp.asks[0].price);
			  	console.log(resp.asks[resp.asks.length-1].price);
 

			  	// arrray you are sending out
			  	var apilist = [];

			  	// lowest bid
			  	apilist[0] = resp.bids[0].price;

			  	// highest bid
			  	apilist[1] = resp.bids[resp.bids.length-1].price;

			  	// lowest ask
			  	apilist[2] = resp.asks[0].price;

			  	// highest ask
			  	apilist[3] = resp.asks[resp.asks.length-1].price;

			  	console.log(apilist);
			  	res.send(apilist);
			
				})

			  .catch(function(err) { 
			  	console.log(err); 
			   	res.send(err);
			   })
	  
	},

	xlmtoeqd: function(req,res){

			var selling = xlm;
			var buying = eqd;

			server.orderbook(selling, buying)
			  .call()
		      .then(function(resp) { 
			   	console.log(resp);

			  	var sortedBids = sortBids(resp.bids);

			  	//res.send(resp);

			  	// testing bids and asks lowest and highest values
			  	console.log(resp.bids[0].price);
			  	console.log(resp.bids[resp.bids.length-1].price);
				console.log(resp.asks[0].price);
			  	console.log(resp.asks[resp.asks.length-1].price);


			  	// arrray you are sending out
			  	var apilist = [];

			  	// lowest bid
			  	apilist[0] = resp.bids[0].price;

			  	// highest bid
			  	apilist[1] = resp.bids[resp.bids.length-1].price;

			  	// lowest ask
			  	apilist[2] = resp.asks[0].price;

			  	// highest ask
			  	apilist[3] = resp.asks[resp.asks.length-1].price;

			  	console.log(apilist);
			  	res.send(apilist);
			
				})

			  .catch(function(err) { 
			  	console.log(err); 
			   	res.send(err);
			   })
	  
	},

	xlmtodemo: function(req,res){

			var selling = xlm;
			var buying = demo;

			server.orderbook(selling, buying)
			  .call()
		      .then(function(resp) { 
			   	console.log(resp);

			  	var sortedBids = sortBids(resp.bids);

			  	//res.send(resp);

			  	// testing bids and asks lowest and highest values
			  	console.log(resp.bids[0].price);
			  	console.log(resp.bids[resp.bids.length-1].price);
				console.log(resp.asks[0].price);
			  	console.log(resp.asks[resp.asks.length-1].price);


			  	// arrray you are sending out
			  	var apilist = [];

			  	// lowest bid
			  	apilist[0] = resp.bids[0].price;

			  	// highest bid
			  	apilist[1] = resp.bids[resp.bids.length-1].price;

			  	// lowest ask
			  	apilist[2] = resp.asks[0].price;

			  	// highest ask
			  	apilist[3] = resp.asks[resp.asks.length-1].price;

			  	console.log(apilist);
			  	res.send(apilist);
			
				})

			  .catch(function(err) { 
			  	console.log(err); 
			   	res.send(err);
			   })
	  
	},

	xlmtojpy: function(req,res){

			var selling = xlm;
			var buying = jpy;

			server.orderbook(selling, buying)
			  .call()
		      .then(function(resp) { 
			   	console.log(resp);

			  	var sortedBids = sortBids(resp.bids);

			  	//res.send(resp);

			  	// testing bids and asks lowest and highest values
			  	console.log(resp.bids[0].price);
			  	console.log(resp.bids[resp.bids.length-1].price);
				console.log(resp.asks[0].price);
			  	console.log(resp.asks[resp.asks.length-1].price);


			  	// arrray you are sending out
			  	var apilist = [];

			  	// lowest bid
			  	apilist[0] = resp.bids[0].price;

			  	// highest bid
			  	apilist[1] = resp.bids[resp.bids.length-1].price;

			  	// lowest ask
			  	apilist[2] = resp.asks[0].price;

			  	// highest ask
			  	apilist[3] = resp.asks[resp.asks.length-1].price;

			  	console.log(apilist);
			  	res.send(apilist);
			
				})

			  .catch(function(err) { 
			  	console.log(err); 
			   	res.send(err);
			   })
	  
	},

	//has an error - not retrieving any info on asks and its affecting the final array
	xlmtophp: function(req,res){

			var selling = xlm;
			var buying = php;

			server.orderbook(selling, buying)
			  .call()
		      .then(function(resp) { 
			   	console.log(resp);

			  	var sortedBids = sortBids(resp.bids);

			  	//res.send(resp);

			  	// testing bids and asks lowest and highest values
			  	console.log(resp.bids[0].price);
			  	console.log(resp.bids[resp.bids.length-1].price);
				console.log(resp.asks[0].price);
			  	console.log(resp.asks[resp.asks.length-1].price);


			  	// arrray you are sending out
			  	var apilist = [];

			  	// lowest bid
			  	apilist[0] = resp.bids[0].price;

			  	// highest bid
			  	apilist[1] = resp.bids[resp.bids.length-1].price;

			  	// lowest ask
			  	apilist[2] = resp.asks[0].price;

			  	// highest ask
			  	apilist[3] = resp.asks[resp.asks.length-1].price;

			  	console.log(apilist);
			  	res.send(apilist);
			
				})

			  .catch(function(err) { 
			  	console.log(err); 
			   	res.send(err);
			   })
	  
	},

	xlmtocny: function(req,res){

			var selling = xlm;
			var buying = cny;

			server.orderbook(selling, buying)
			  .call()
		      .then(function(resp) { 
			   	console.log(resp);

			  	var sortedBids = sortBids(resp.bids);

			  	//res.send(resp);

			  	// testing bids and asks lowest and highest values
			  	console.log(resp.bids[0].price);
			  	console.log(resp.bids[resp.bids.length-1].price);
				console.log(resp.asks[0].price);
			  	console.log(resp.asks[resp.asks.length-1].price);


			  	// arrray you are sending out
			  	var apilist = [];

			  	// lowest bid
			  	apilist[0] = resp.bids[0].price;

			  	// highest bid
			  	apilist[1] = resp.bids[resp.bids.length-1].price;

			  	// lowest ask
			  	apilist[2] = resp.asks[0].price;

			  	// highest ask
			  	apilist[3] = resp.asks[resp.asks.length-1].price;

			  	console.log(apilist);
			  	res.send(apilist);
			
				})

			  .catch(function(err) { 
			  	console.log(err); 
			   	res.send(err);
			   })
	  
	},

	btctoeurt: function(req,res){

			var selling = btc;
			var buying = eurt;

			server.orderbook(selling, buying)
			  .call()
		      .then(function(resp) { 
			   	console.log(resp);

			  	var sortedBids = sortBids(resp.bids);

			  	//res.send(resp);

			  	// testing bids and asks lowest and highest values
			  	console.log(resp.bids[0].price);
			  	console.log(resp.bids[resp.bids.length-1].price);
				console.log(resp.asks[0].price);
			  	console.log(resp.asks[resp.asks.length-1].price);


			  	// arrray you are sending out
			  	var apilist = [];

			  	// lowest bid
			  	apilist[0] = resp.bids[0].price;

			  	// highest bid
			  	apilist[1] = resp.bids[resp.bids.length-1].price;

			  	// lowest ask
			  	apilist[2] = resp.asks[0].price;

			  	// highest ask
			  	apilist[3] = resp.asks[resp.asks.length-1].price;

			  	console.log(apilist);
			  	res.send(apilist);
			
				})

			  .catch(function(err) { 
			  	console.log(err); 
			   	res.send(err);
			   })
	  
	},

 	//has an error - not retrieving any info on asks and its affecting the final array
 	btctoeqd: function(req,res){

			var selling = btc;
			var buying = eqd;

			server.orderbook(selling, buying)
			  .call()
		      .then(function(resp) { 
			   	console.log(resp);

			  	var sortedBids = sortBids(resp.bids);

			  	//res.send(resp);

			  	// testing bids and asks lowest and highest values
			  	console.log(resp.bids[0].price);
			  	console.log(resp.bids[resp.bids.length-1].price);
				console.log(resp.asks[0].price);
			  	console.log(resp.asks[resp.asks.length-1].price);


			  	// arrray you are sending out
			  	var apilist = [];

			  	// lowest bid
			  	apilist[0] = resp.bids[0].price;

			  	// highest bid
			  	apilist[1] = resp.bids[resp.bids.length-1].price;

			  	// lowest ask
			  	apilist[2] = resp.asks[0].price;

			  	// highest ask
			  	apilist[3] = resp.asks[resp.asks.length-1].price;

			  	console.log(apilist);
			  	res.send(apilist);
			
				})

			  .catch(function(err) { 
			  	console.log(err); 
			   	res.send(err);
			   })
	  
	},

	eurttophp: function(req,res){

			var selling = eurt;
			var buying = php;

			server.orderbook(selling, buying)
			  .call()
		      .then(function(resp) { 
			   	console.log(resp);

			  	var sortedBids = sortBids(resp.bids);

			  	//res.send(resp);

			  	// testing bids and asks lowest and highest values
			  	console.log(resp.bids[0].price);
			  	console.log(resp.bids[resp.bids.length-1].price);
				console.log(resp.asks[0].price);
			  	console.log(resp.asks[resp.asks.length-1].price);


			  	// arrray you are sending out
			  	var apilist = [];

			  	// lowest bid
			  	apilist[0] = resp.bids[0].price;

			  	// highest bid
			  	apilist[1] = resp.bids[resp.bids.length-1].price;

			  	// lowest ask
			  	apilist[2] = resp.asks[0].price;

			  	// highest ask
			  	apilist[3] = resp.asks[resp.asks.length-1].price;

			  	console.log(apilist);
			  	res.send(apilist);
			
				})

			  .catch(function(err) { 
			  	console.log(err); 
			   	res.send(err);
			   })
	  
	}

};


module.exports = orderbook;