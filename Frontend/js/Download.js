(function($){
	$('.carousel').carousel("pause");
	if($("couponCarousel .item").length===1) $(".coupon-list>nav").css("visibility", "hidden");

	$("#couponCarousel > .carousel-inner").on("click", "img", function(){
		$("#myModal-2").modal().find("img").attr("src", $(this).attr("qr-code"));
	});

	$(".coupon-list >nav>i").click(function(){
		$('.carousel').carousel($(this).attr("data"));
	});
}(jQuery))