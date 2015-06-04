global.jQuery = require('jquery');
var widget = require('./lib/widget');

jQuery(document).ready(function(){

    var w = new widget('#foo');
    w.helter([
	'oingo!',
	'<br/>',
	'boingo!'
    ]);
});
