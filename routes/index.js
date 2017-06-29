var express = require('express');
var sql = require('mssql/msnodesqlv8');
var router = express.Router();
var log4js = require('log4js');

log4js.configure('config/log4js.json');
var log = log4js.getLogger("index");

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

var config = {
	user:'test',
	password:'test123456',
	server:'112.74.82.228',
	port:54336,
	parseJSON: true,
	database:'SYDS',
	options:{
		encrypt:true	
	}
};

router.get('/', function (req, res) {
   
	sql.connect(config).then(pool => {
	 
	    return pool.request()
	    .query('select top 100 * from cfgbase.BaMy_tbDrBasic;');
	})
	.then(result => {
	    //console.dir(result);
	    sql.close();
	    res.status(200).json(result);
	}).catch(err => {
	    // ... error checks
	    //console.log(err);
	    log.error(err);
	    sql.close();
	    res.status(500).send(err);
	});
	// .then(result => {
	//     console.dir(result)
	    
	//     // Stored procedure
	    
	//     return pool.request()
	//     .input('input_parameter', sql.Int, value)
	//     .output('output_parameter', sql.VarChar(50))
	//     .execute('procedure_name')
	// })
	
   //res.render('index', { title: 'Hey', message: 'Hello there!'});
});

module.exports = router;
