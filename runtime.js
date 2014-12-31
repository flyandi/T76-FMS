
/** Radar */
var Radar = function() {

	var rx = 10, target = $(".radar").find(".inner");

	for(var i = 0; i < rx; i++) {
		var s = (i+1) * 50, 
			circle = $("<circle></circle>").css({
				width: s, 
				height: s, 
				"border-radius": s, 
				"margin-left": -1 * Math.round(s / 2),
				"margin-top": -1 * Math.round(s / 2)
			}).appendTo(target);

	};

	// run radar
	var at = false, d = false, p = -90, radarAnim = function() {
		p = d ? p + 10 : p - 10;

		if(p <= -90) { d = true; p = -90}
		if(p >= 90) {d = false; p = 90;}



		$(".needle").css({
			transform: 'rotate(' + p + 'deg)'
		});

		at = setTimeout(function() {
			radarAnim();
		}, 100)


	}

	radarAnim();

}


var Gauges = function() {

	$.each([
		{label:'HYSP', offcolor: '#778899'},
		{label:'ENERGY', offcolor:'#778899'},
		{label:'SHIELD', offcolor:'#778899'},

	], function(index, p) {
		var gauge = $("<div></div>").addClass("gauge").appendTo(".gauges");

		gauge.append($("<label></label>").append(p.label));

		var panels = $("<div></div>").addClass("panels").appendTo(gauge);

		for(var i = 0; i < 10; i++) {
			var pn = $("<div></div>").addClass("panel").appendTo(panels);

			pn.css("background-color", p.offcolor);

		}
	});


}




$(function() {

	Radar();
	Gauges();
});