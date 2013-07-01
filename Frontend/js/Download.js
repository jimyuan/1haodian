(function($){
	$('.carousel').carousel("pause");
	if($("couponCarousel .item").length===1) $(".coupon-list>nav").css("visibility", "hidden");

	$("#couponCarousel > .carousel-inner").on("click", "img", function(){
		var img=$(this).attr("qr-code");

		$("#myModal-2").modal().on("shown", function(){
			$(this).find("img").attr("src", img);
		}).on("hidden", function(){
			$(this).find("img").attr("src", "");
		});
	});

	$(".coupon-list >nav>i").click(function(){
		$('.carousel').carousel($(this).attr("data"));
	});
}(jQuery))