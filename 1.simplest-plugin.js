// Simplest plugin.

$.fn.greenify = function () {
	this.css( "color", "green" );
};

// css selector
$( "a" ).greenify(); // Makes all the links green.