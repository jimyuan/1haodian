(function($){
	$.getScript("../Frontend/js/jquery.gallery.js", function(){
		$('#Pro-container').gallery();
	});

	$("#Sort-guide").on("click","i",function(){
		var d=360/10;
		var r=($(this).attr("data")==="next") ? -1 : 1;

		//rotate 对象
		var $ro=$(this).parent().prev();
		var deg=parseInt($ro.attr("deg"), 10);//当前角度值
		var deg2=deg+d*r;//需达到的角度

		$ro.attr("deg",deg2);
		$ro.css("-webkitTransform", "rotate("+deg2+"deg)")

		//get sort name
		var sn=$("#Sort-name").html().split(",");
		var i=0;
		if(deg2>0) i=360-deg2%360;
		if(deg2<0) i=deg2%360*-1;
		console.log(sn[i/36]);
	});

	$("#Sort-pie").hover(function(){
		$("#Sort-guide").fadeIn()
	}, function(){
		$("#Sort-guide").fadeOut();
	});

	$(".pro-desc").click(function(e){
		e.stopPropagation();

		$('#descModal').modal().find(".modal-header h3").html($(this).next().children("h3").html())
		.end().find(".modal-body p").html($(this).next().children("p").html());
		return false;
	});

}(jQuery))
