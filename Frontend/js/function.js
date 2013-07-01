$(function($){
	$.goHome = function () {
		var loadtime = null, waittime = null;
		var s = 20; //waiting seconds

		if ($("#Menu").length === 0) {
			loadtime = window.setTimeout(function () {
				window.location.href = "/";
			}, s * 1000);

			$("body").mousemove(function () {
				window.clearInterval(loadtime);
				if (waittime != null) window.clearInterval(waittime);
				waittime = window.setTimeout(function () {
					window.location.href = "/";
				}, s * 1000);
			}).click(function(){
				$(this).trigger("mousemove");
			});
		}
	};

	$.goHome();
} (jQuery))