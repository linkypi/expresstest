var express = require('express');
var db = require('../utils/db');
var router = express.Router();
var log = require('../utils/log').getLogger("error");

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', function (req, res, next) {
   
    db.request().query('select top 100 * from cfgbase.BaMy_tbDrBasic;',
      function (err, result) {
        if (err)
        {
        	log.error(err);
	        res.status(500).send(err);
            //return next(err);
        }
        else
           res.status(200).json(result);
    }); 

   //res.render('index', { title: 'Hey', message: 'Hello there!'});
});

module.exports = router;
