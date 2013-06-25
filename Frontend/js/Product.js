(function($){
	$.getProName=function(){
		//get sort name
		var sn=$("#Sort-name").html().split(",");
		sn.pop();
		sn=$.ext(sn, 10);

		var deg= $("#Sort-pie > img").attr("deg");
		var i=0;
		if(deg>0) i=360-deg%360;
		if(deg<0) i=deg%360*-1;
		return sn[i/36];
	}

	$.getPro=function(){ //get prosort name
		var proid=this.getProName();
		console.log(proid);
		$(".dg-wrapper").html($("#Sort-wrap>a."+proid).clone());
		$.getScript("../Frontend/js/jquery.gallery.js", function(){
			// $("#Pro-container").undelegate();
			$("#Pro-container").gallery();
		});
	}

	$("#Sort-guide").on("click","i",function(){
		var d=360/10;
		var r=($(this).attr("data")==="next") ? -1 : 1;

		//rotate 对象
		var $ro=$(this).parent().prev();
		var deg=parseInt($ro.attr("deg"), 10);//当前角度值
		var deg2=deg+d*r;//需达到的角度

		$ro.attr("deg",deg2);
		$ro.css("-webkitTransform", "rotate("+deg2+"deg)");

		$.getPro();
	});

	$("#Sort-pie").hover(function(){
		$("#Sort-guide").fadeIn()
	}, function(){
		$("#Sort-guide").fadeOut();
	});

	$(".dg-center").click("img", function(){
		console.log(123)
		$('#descModal').modal().find(".modal-header h3").html($(this).find("h3").html())
		.end().find(".modal-body p").html($(this).find("p").html());
		return false;
	});

	// console.log(getProName())
	$.getPro();

}(jQuery))
