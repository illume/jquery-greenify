(function ($) {
	$.fn.greenify = function(options) {
		var opts = $.extend({}, $.fn.greenify.defaults, options);
		return this.each(function () {
			this.css( "color", opts.shade );
		});
	};
	$.fn.greenify.defaults = {
		shade: "#556b2f",
		otherOptions: "can go here"
	};
}(jQuery));