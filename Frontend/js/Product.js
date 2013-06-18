(function($){
	$.getScript("../Frontend/js/jquery.gallery.js", function(){
		$('#Pro-container').gallery();
	});

	$("#Sort-guide").on("click","i",function(){
		var d=180/5;
		var r=($(this).attr("data")==="next") ? -1 : 1;

		//rotate 对象
		var $ro=$(this).parent().prev();
		var deg=parseInt($ro.attr("deg"), 10);//当前角度值
		var deg2=deg+d*r;//需达到的角度
		// if(deg2>180) deg2=deg2-180;

		$ro.attr("deg",deg2);
		console.log($ro.attr("deg"))
		var cosVal = Math.cos(deg2 * Math.PI / 180), sinVal = Math.sin(deg2 * Math.PI / 180);
		var valTransform = 'matrix('+ cosVal.toFixed(6) +','+ sinVal.toFixed(6) +','+ (-1 * sinVal).toFixed(6) +','+ cosVal.toFixed(6) +',0,0)';

		$ro[0].style["-webkitTransform"] = valTransform;
	});
	$("#Sort-pie").hover(function(){
		$("#Sort-guide").fadeIn()
	}, function(){
		$("#Sort-guide").fadeOut();
	});

	$(".pro-desc").click(function(e){
		e.stopPropagation();
		$("#Prodesc").fadeIn();
		return false;
	});

	$("i.dg-prev, i.dg-next").mousedown(function(){
		$("#Prodesc").fadeOut();
	});
}(jQuery))
