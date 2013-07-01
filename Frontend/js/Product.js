(function($){
	$("#proCarousel2").carousel("pause");
	$(".item").on("click", "i", function(){
		console.log(12)
		$('#descModal').modal().find(".modal-header h3").html($(this).next().find("h3").html())
		.end().find(".modal-body p").html($(this).next().find("p").html());
	}).on("click", "a", function(){return false;});

$("#Sort-wrap").sortBar();

}(jQuery))
