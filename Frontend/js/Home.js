(function($){
	var o=$("#Menu"), o2=$("#Nav-scroll");
	if(o.height() >= o.children("ul").height()) o2.hide();
	else{
		var gap=o.children().height()-o.height();
		// console.log(gap)
		var scroll=window.setInterval(function(){}, 10);
		var s=o.scrollTop(), t=30;

		o2.on("mousedown", "i", function(){
			window.clearInterval(scroll);
			var d=($(this).attr("data")==="down") ? 1 : -1;
			scroll=window.setInterval(function(){
				t+=s+10*d;
				if(t<0) t=0;
				if(t>gap) t=gap;
				o.scrollTop(t)
			}, 10);
		})
		.on("mouseup", "i", function(){window.clearInterval(scroll)});
	}

}(jQuery));