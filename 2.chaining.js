// Chaining

$.fn.greenify = function () {

	// iterate over each element selected.
	return this.each(function () {
		this.css( "color", "green" );
	});
}

$( "a" ).greenify().addClass( "greenified" );