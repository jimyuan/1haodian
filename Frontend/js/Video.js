(function($){
	$(".sort-list").sortBar();
	$('#dg-container a').click(function(){return false;});

	$.getScript("../Frontend/js/jquery.gallery.js", function(){
		$('#dg-container').gallery();

		$(".dg-play").click(function(){
			var $o=$("a.dg-center img");
			$o.hide().next().css("opacity", 100);
			//play & pause control
			var vo=$("a.dg-center video")[0];
			if (vo.paused) {
					vo.play();
					$(this).addClass("icon-pause");
			 } else {
					vo.pause();
					$(this).removeClass("icon-pause");
			 }
		});

		$("i.dg-prev, i.dg-next").mousedown(function(){
			var $o=$("a.dg-center video");
			if($o.is(":visible")){
				$o[0].pause();
				$o.css("opacity", 0).prev().show();
				$("i.dg-play").removeClass("icon-pause");
			}
		});
	});
}(jQuery))