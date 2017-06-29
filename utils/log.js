var log4js = require('log4js');  

log4js.configure('config/log4js.json');
  
var applog = log4js.getLogger('info');  
  
exports.getLogger = log4js.getLogger;  
  
exports.use = function(app) {  
    //页面请求日志,用auto的话,默认级别是WARN  
    //app.use(log4js.connectLogger(dateFileLog, {level:'auto', format:':method :url'}));  
    app.use(log4js.connectLogger(applog, {level:'info', format:':status :method :url'}));  
}  