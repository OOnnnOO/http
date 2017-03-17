var express = require('express');
var path = require('path');
var favicon=require('serve-favicon');
var config = require('config-lite');

var app = express();


var index = require('./routes/index');
var status = require('./routes/status');
app.set('x-powered-by',false);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use('/', index);
app.use('/status', status);

// catch 404 and forword to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

app.listen(config.port, config.hostname, function () {
  console.log('server is listening on port ' + config.port)
});
