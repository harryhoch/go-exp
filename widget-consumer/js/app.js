
var jQuery = require('jquery');
var widget = require('hh-exp-widget');

jQuery(document).ready(function(){

    var w = new widget('#foo');
    w.helter([
	'oingo!',
	'<br/>',
	'boingo!'
    ]);
});
