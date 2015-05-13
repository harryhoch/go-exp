/**
 * Experimental widget to demonstrate the different parts of a
 * npm/gulp-based build pipeline.
 *
 * The widget itself does nothing of import.
 *
 * @module go-exp-widget
 */

// Setup the widget's environment.
var us = require('underscore');
var jQuery = require('jquery');

/**
 * Object class for our little widget.
 *
 * @param {String} element_id; must be resolvable by jQuery.
 */
//module.exports = function(element_id){

    var anchor = this;

    /**
     * Displays the given string (or strings) in the constructor's element.
     *
     * @param {String} strs or list of str
     */
    anchor.helter = function(strs){
	jQuery(element_id).empty();

	if( ! us.isArray(strs) ){ strs = [strs]; }

	us.each(strs, function(s){
	    jQuery(element_id).append(s);
	});
    };

    /**
     * Displays the given string (or strings) in the console.
     *
     * @param {String} strs list of str
     */
    anchor.skelter = function(strs){
	
	if( ! us.isArray(strs) ){ strs = [strs]; }

	us.each(strs, function(s){
	    console.log('From widget (skelter): "' + s + '"');
	});
    };
//};
