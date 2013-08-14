// Globel JS Definde

(function ($) {

	$.fn.sortBar=function(){
		return this.each(function(){
			var o=$(".sort-list"), o2=$(".left-path, .right-path");
			var list=o.children("ul"), item=list.children("li");

			list.width(function(){
				var w=0;
				item.each(function(){
					w+=$(this).outerWidth(true);
				});
				return w;
			});

			if(o.width()>=list.width()) o2.hide();
			else{
				$(".right-path").css("visibility","visible");
				var gap=list.width()-o.width();
				var scroll=window.setInterval(function(){}, 10);
				var s=o.scrollLeft(), t=30;
				console.log(t)
			}

			o2.on("mousedown", function(){
				window.clearInterval(scroll);
				var d=($(this).hasClass("left-path")===true) ? -1 : 1;
				scroll=window.setInterval(function(){
					if(o.scrollLeft()>0) $(".left-path").css("visibility", "visible");
					else $(".left-path").css("visibility", "hidden");

					if(o.scrollLeft()>=gap) $(".right-path").css("visibility", "hidden");
					else $(".right-path").css("visibility", "visible");

					t+=s+10*d;
					if(t<0) t=0;
					if(t>gap) t=gap;
					o.scrollLeft(t)
				}, 10);
				
			})
			.on("mouseup", function(){window.clearInterval(scroll)});
		});
	};

	$.succ = function (t) {
		if ($.isNumeric(t)) { return t - 0 + 1; }
		else {
			t = t + "";
			return t.slice(0, t.length - 1) +
			String.fromCharCode(t.charCodeAt(t.length - 1) + 1);
		}
	};
	
	$._getCookieVal=function(b){
		var a = document.cookie.indexOf(";", b);
		if (a == -1) {
			a = document.cookie.length
		}
		return unescape(document.cookie.substring(b, a))
	};

	$.setCookie=function(a, b, c){
		if (c) {
			document.cookie = a + "=" + escape(b) + ";expires=" + c.toGMTString();
		} 
		else {
			document.cookie = a + "=" + escape(b);
		}
	};

	$.getCookie=function(d){
		if (d == "path" || d == "expires" || d == "domain" || d == "version") {
			d = "badCookieName"
		}
		var b = d + "=";
		var f = b.length;
		var a = document.cookie.length;
		var e = 0;
		while (e < a) {
			var c = e + f;
			if (document.cookie.substring(e, c) == b) {
				return this._getCookieVal(c)
			}
			e = document.cookie.indexOf(" ", e) + 1;
			if (e == 0) {
				break;
			}
		}
		return null;
	};
	
	$.R = function (start, end) {
		var edge = arguments[2] || false;
		var v = start;
		var a = [];
		var flag = function (value) {
			if (value < start) { return false; }
			if (edge) { return value < end; }
			return value <= end;
		};
		while (flag(v)) {
			a.push(v); v = this.succ(v);
		}
		return a;
	};
	
	$.ext=function(arr, n){
		var l=arr.length;
		if(!$.isArray(arr)) return [];
		var arr2=arr;
		for(var i=0; i<Math.floor(n/l); i++){
			arr2=$.merge(arr2,arr);
		}
		arr2.length=n;
		return arr2;
	};

	$("body")[0].onselectstart=function(){return false;}
	$("body")[0].ondragstart=function(){return false;}

} (jQuery))
