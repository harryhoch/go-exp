// from https://learn.jquery.com/jquery-ui/widget-factory/how-to-use-the-widget-factory/

(function (factory) {
  // If there is a variable named module and it has an exports property,
  // then we're working in a Node-like environment. Use require to load
  // the jQuery object that the module system is using and pass it in.
  if(typeof module === "object" && typeof module.exports === "object") {
     module_exports=factory(require("jquery"), window, document);
  }
  // Otherwise, we're working in a browser, so just pass in the global
  // jQuery object.
  else {
    factory(jQuery, window, document);
  }
})    
(function($, window, document, undefined) {
    $.widget( "hh.rogressbar", {

	options: {
            value: 0
	},
	
	_create: function() {
            var progress = this.options.value + "%";
            this.element.addClass( "rogressbar" )
            this.refresh();
	},

	   // Create a public method.
	value: function( value ) {
	    
            // No value passed, act as a getter.
            if ( value === undefined ) {
		
		return this.options.value;
		
		// Value passed, act as a setter.
            } else {
		
		this.options.value = this._constrain( value );
		var progress = this.options.value + "%";
		this.element.text( progress );
		
            }
	    
	},
	_setOption: function( key, value ) {
            if ( key === "value" ) {
		value = this._constrain( value );
            }
            this._super( key, value );
	},
	_setOptions: function( options ) {
            this._super( options );
            this.refresh();
	},
	
	refresh: function() {
            var progress = this.options.value + "%";
            this.element.text( progress );
            if ( this.options.value == 100 ) {
		this._trigger( "complete", null, { value: 100 } );
            }
	},
	_constrain: function( value ) {
            if ( value > 100 ) {
		value = 100;
            }
            if ( value < 0 ) {
		value = 0;
            }
            return value;
	},
	_destroy: function() {
            this.element
		.removeClass( "rogressbar" )
		.text( "" );
	}
	
    });
});
