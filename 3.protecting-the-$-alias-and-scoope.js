// Protecting the $ Alias and Adding Scope

//
// Protect $
// ---------
// We can use the $ variable, without clobbering it for other JS libraries.

(function ( $ ) {
	$.fn.greenify = function() {
		this.css( "color", "green" );
		return this;
	};
}( jQuery ));

//
// Hide variables from others
// --------------------------

(function ( $ ) {
	// Hide the shade variable inside the scope.
	var shade = "#556b2f";
	$.fn.greenify = function() {
		this.css( "color", shade );
		return this;
	};
}( jQuery ));


