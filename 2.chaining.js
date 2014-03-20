// Chaining

$.fn.greenify = function () {

	// iterate over each element selected.
	return this.each(function () {
		this.css( "color", "green" );
	});
}

// greenify all the links, then add a "greenified" class to them.
$( "a" ).greenify().addClass( "greenified" );