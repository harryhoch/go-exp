var  $= require('jquery');
require('tipso');
require('jquery-ui');
require('./lib/pb');
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

    $('.title-tipso').tipso();

    var bar = $( "<div></div>" )
	.appendTo( "body" )
	.rogressbar({
            complete: function( event, data ) {
		alert( "Callbacks are great!" );
            }
	})
	.bind( "rogressbarcomplete", function( event, data ) {
            alert( "Events bubble and support many handlers for extreme flexibility." );
            alert( "The progress bar value is " + data.value );
	});
    
    bar.rogressbar("value",100);
    
    // Get the current value.
    alert( bar.rogressbar("value"));
    
    // Update the value.
    bar.rogressbar("value", 50 );
    
    // Get the current value again.
    alert(bar.rogressbar("value"));
});
