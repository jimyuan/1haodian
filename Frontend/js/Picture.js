(function($){
	$(".sort-list").sortBar();
	$('.carousel').carousel("pause");
	if($("#proCarousel .item").length===1) $(".carousel-control").css("visibility", "hidden");

	$("#proCarousel > .carousel-inner").on("click", "i", function(e){
		$("#proModal").modal().find("img").attr("src", $(this).prev().attr("src"))
	});
}(jQuery))