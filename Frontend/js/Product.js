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
		$(".carousel-inner").html($("#Sort-wrap>a."+proid).clone()).children().wrap('<div class="item">').end().children(":first-child").addClass("active");
		
		$("#proCarousel2").carousel("pause");

		$(".item").on("click", "i", function(){
			console.log(12)
			$('#descModal').modal().find(".modal-header h3").html($(this).next().find("h3").html())
			.end().find(".modal-body p").html($(this).next().find("p").html());
			// return false;
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

	

	// console.log(getProName())
	$.getPro();

}(jQuery))
