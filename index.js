

// Display Available Motor Finance
exports.homeMFinance = function(req, res) {
	var db = req.db;
	var collection = db.collection('MotorFinance');
	collection.find().toArray(function(err, motorFinanceArray) {
		if (motorFinanceArray) {
			console.log(motorFinanceArray)
			res.send(motorFinanceArray);
			
		}
		else {
			res.render('index', {
				title: 'No Finance Options Found'
			});
		}
	});
};

// Search for requested Motor Finance
exports.findByName = function(req, res) {
	var db = req.db;
	var collection = db.collection('MotorFinance');
	var name = req.params.name;
	var dealerNo = req.params.dealerNo;
	/*var goodsCode = req.params.goodsCode;
	var scheme = req.params.scheme;
	var dor = req.params.dor;*/
	collection.findOne({
		'dealerNo': dealerNo
		/*,
		'goodsCode': goodsCode,
		'scheme': scheme,
		'dor': dor,*/
		
	}, function(err, item) {
		if (item) {
			res.send(item);
			
		}
		else {
			res.send('Finance Options are Not Found'
			);
		}
	});
};

// create a Motor Finance Search Entry
exports.createMFinance = function(req, res) {
	var db = req.db;
	var collection = db.collection('MotorFinance');
	var post = req.body;
	//var myobj = { name: "Company Inc", address: "Highway 37" };
	console.log(post);
	collection.insert(post, {
		safe: true
	}, function(error, result) {
		if (error) {
			res.send( {
				"message": 'MotorFinance Save Failed!'
			});
		}
		else {
			res.redirect("/");
		}
	});
};

