var express = require('express');
var router = express.Router();

var mysql=require('mysql');
var connection=mysql.createPool({
	host:'localhost',
	user:'root',
	password:'123456',
	database:'lyb'
})
/* GET home page. */

//  增加
router.post('/list', function(req, res, next) {
	 res.header("Access-Control-Allow-Origin", "*");
	var name=req.body.name
	var mes=req.body.mes
	console.log(req.body)
	
	connection.query('INSERT INTO item (name,mesche) VALUES ("'+name+'","'+mes+'")', function(err, rows, fields) {
		
  			res.send(rows)
})
});

// 查询
router.get('/', function(req, res, next) {
	
	connection.query('SELECT * FROM item', function(err, rows, fields) {
		 res.header("Access-Control-Allow-Origin", "*");
  			res.send(rows)
})
});


//  删除
router.post('/delete', function(req, res, next) {
		res.header("Access-Control-Allow-Origin", "*");

  var ah=req.body.a
  console.log(req.body)
  console.log(ah)
    connection.query('DELETE FROM item WHERE id='+ah, function(err, rows, fields) {

		 
  res.send(rows)
  })
});
module.exports = router;
