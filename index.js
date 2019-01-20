//Display Available Motor Finance
exports.homeMFinance = function(req, res) {
	var db = req.db;
	var collection = db.collection('MotorFinanceRef');
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
	var collection = db.collection('MotorFinanceRef');
	var name = req.params.name;
	var dealerNo = req.params.dealerNo;
	var goodsCode = req.params.goodsCode
		res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	console.log(dealerNo+goodsCode)
	//var query = { "dealerNo": dealerNo , "goodsCode": goodsCode};
	/*var goodsCode = req.params.goodsCode;
	var scheme = req.params.scheme;
	var dor = req.params.dor;*/
	collection.findOne({'dealerNo': dealerNo , "goodsCode": goodsCode
	//, "goodsCode": goodsCode
		//'dealerNo': dealerNo
		/*,
		'goodsCode': goodsCode,
		'scheme': scheme,
		'dor': dor,*/
		
	}, function(err, item) {
		if (item) {
			console.log(item)
			res.send(item);
		}
		else {
			res.redirect("/");
			//res.send('Finance Options are Not Found'
			//);
		}
	});
};

// create a Motor Finance Search Entry
exports.createMFinance = function(req, res) {
	var db = req.db;
	var collection = db.collection('MotorFinance');
	var post = req.body;
	if(post){
	//var rq = JSON.parse(post)
	console.log("========>"+post);
	collection.insert(post, {
		safe: true
	}, function(error, result) {
		if (error) {
			res.send( {
				"message": 'MotorFinance Save Failed!'
			});
		}
		else {
			console.log(post.dealerNo)
			console.log(post.goodsCode)
			res.redirect("/retrieve/"+post.dealerNo+"/"+post.goodsCode);
		}
	});
}else{
	res.redirect("/");
}

};
