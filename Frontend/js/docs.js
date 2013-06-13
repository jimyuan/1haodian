// Globel JS Definde

(function($){
	$.fn.sortBar=function(){
		return this.each(function() {
			//list:ul
			var item=$(this).find("li"), list=$(this).children();
			//左右箭头
			var l=$(this).prev(), r=$(this).next();

      //ul总宽度
      list.width(function(){
      	return item.length*item.outerWidth(true);
      });

      // if(list.width()>$(this).width()) {
      // 	r.css("visibility","visible");
      // }

      arrowFlag=function(){
      	//最大位移
      	var offsetMargin=list.width()-list.parent().width();
      	//位移单位
      	var step=Math.abs(parseInt(list.css("marginLeft")))

      	if(step===0) l.css("visibility", "hidden");

      	if(offsetMargin>0) r.css("visibility", "visible");
      	else r.css("visibility", "hidden");

      	if(step>0 && (step-offsetMargin)<0) l.css("visibility","visible");
      		
      	if(step-offsetMargin>=0) r.css("visibility", "hidden");
      }

      arrowFlag();

      l.on("click", function(){
      	if(list.css("margin-left")<"0px" && !list.is(":animated")){
      		list.animate({marginLeft:"+="+item.outerWidth(true)}, "fast", arrowFlag);
      	}
      });
      r.on("click", function(){
      	if($(this).prev().width()-list.width()<=parseInt(list.css("marginLeft"), 10) && !list.is(":animated")){
      		list.animate({marginLeft:"-="+item.outerWidth(true)}, "fast", arrowFlag);
      	}
      });
		});
	};
}(jQuery))