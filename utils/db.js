var mssql = require("mssql/msnodesqlv8"); 

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

var connection = mssql.connect(config, function (err) {
    if (err)
        throw err; 
});

module.exports = connection; 
