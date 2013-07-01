(function($){
	$(".sort-list").sortBar();
	$('.carousel').carousel("pause");
	if($("#proCarousel .item").length<=1) $(".carousel-control").css("visibility", "hidden");

	$("#proCarousel > .carousel-inner").on("click", "img", function(e){
		var img=$(this).attr("rel");
		$("#myModal").modal().on("shown", function(){
			$(this).find("img").attr("src", img)
		}).on("hidden", function(){
			$(this).find("img").attr("src", "");
		});
	}).on("click", "i", function(){
		$(this).prev().trigger("click");
	});
}(jQuery))