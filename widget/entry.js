var  $= require('jquery');
require('jquery-ui');


var widget = require('./lib/widget');

$(document).ready(function(){

    var w = new widget('#foo');
    w.helter([
	'oingo!',
	'<br/>',
	'boingo!'
    ]);
    $("input").autocomplete({ source: ['jquery', 'mootools', 'underscore']});
    $("#slider").slider();
});
