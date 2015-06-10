var  $= require('jquery');
require('tipso');
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

    $('.title-tipso').tipso();

    bar = $( "<div></div>" )
	.appendTo( "body" )
	.progressbar({
            complete: function( event, data ) {
		alert( "Callbacks are great!" );
            }
	})
	.bind( "progressbarcomplete", function( event, data ) {
            alert( "Events bubble and support many handlers for extreme flexibility." );
            alert( "The progress bar value is " + data.value );
	});
    
    bar.progressbar( "option", "value", 100 );var bar = $( "<div></div>" )
	.appendTo( "body" )
	.progressbar({ value: 20 });
    
    // Get the current value.
    alert( bar.progressbar( "value" ) );
    
    // Update the value.
    bar.progressbar( "value", 50 );
    
    // Get the current value again.
    alert( bar.progressbar( "value" ) );
});
