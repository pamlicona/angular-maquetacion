
/**
 * Module dependencies
 */

var express = require('express'),
  bodyParser = require('body-parser'),
  methodOverride = require('method-override'),
  errorHandler = require('error-handler'),
  morgan = require('morgan'),
  http = require('http'),
  path = require('path');

var app = express();

/**
 * Configuration
 */

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/app');
app.set('view engine', 'jade');
app.use(morgan('dev'));
app.use(bodyParser());
app.use(methodOverride());

app.use(express.static(path.join(__dirname, '/app'), {maxAge: '1d'}));
app.use(express.static(path.join(__dirname, 'assets')));
app.use('/bower_components', express.static(__dirname + '/bower_components', {maxAge: '1d'}));
app.use('/assets/images', express.static(path.join(__dirname, '/assets/img/'), {maxAge: '1d'}));

var env = process.env.NODE_ENV || 'development';

// development only
if (env === 'development') {
  //TODO
}

// production only
if (env === 'production') {
  // TODO
}

/**
 * Routes
 */

// serve index and view partials
app.get('/', function (req, res) {
  res.render('base/layout', {
    pretty: false,
  });
});

app.get('/:name/:template?', function (req, res) {
  var name = req.params.name;
  res.render(name + '/' + name, {pretty: true});
});

/**
 * Start Server
 */

http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
