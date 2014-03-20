

$.fn.greenify = function( options ) {
	// Extend our default options with those provided.
	// Note that the first argument to extend is an empty
	// object – this is to keep from overriding our "defaults" object.
	var opts = $.extend( {}, $.fn.greenify.defaults, options );
	// Our plugin implementation code goes here.

	return this.each(function () {
		this.css( "color", opts.shade );
	});

};

// Plugin defaults – added as a property on our plugin function.
$.fn.greenify.defaults = {
	shade: "#556b2f",
	otherOptions: "can go here"
};

// Now people can...

// pass in their own shade of 'green'.
$('a').greenify({"shade": "#BEE"})

// see the defaults, and change them.
$.fn.greenify.defaults.shade = "#BEE";

$('a').greenify()