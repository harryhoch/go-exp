
// Demonstrate the server usability of the go-exp-widget package.
var widget = require('go-exp-widget');
var w = new widget();
w.skelter('Hello, World!');

// Spin up the 
var express = require('express');
var app = express();

// Flat static files in 'static'.
app.use(express.static('static'));

// The "app" delivered directly.
app.get('/', function (req, res) {
    var outlines = [
	'<html>',
	'<head>',
	'<script type="text/javascript" src="/app-bundle.min.js"></script>',
	'</head>',
	'<body>',
	'<p>Hello World! I have something to say:</p>',
	'<p id="foo">With JS and go-exp-widget, you should not see this.</p>',
	'</body>',
	'</html>'
    ];
    res.send(outlines.join("\n"));
});

var server = app.listen(9876, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('go-exp/widget-consumer listening at http://%s:%s', host, port);

});
