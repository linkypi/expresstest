var FileStreamRotator = require('file-stream-rotator')
var fs = require('fs')
var morgan = require('morgan')
var path = require('path')

var logDirectory = path.join(__dirname, 'log')

// ensure log directory exists
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory)

// create a rotating write stream
var accessLogStream = FileStreamRotator.getStream({
  date_format: 'YYYY-MM-DD HH:mm:ss',
  filename: path.join(logDirectory, 'access.%DATE%.log'),
  frequency: 'daily',
  verbose: false
})

// setup the logger
//app.use(morgan('combined', {stream: accessLogStream}))
