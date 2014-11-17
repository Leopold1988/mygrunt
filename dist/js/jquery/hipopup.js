/*
	{
		Version : "1.0.1",
		Name : "hipopup",
		Author : "leopold",
		Date : "2014-10-21",
		Dependence : [ // 依赖
			'Modernizr', 		// animations && opacity
			'animate.css'		// 盒子动画效果库
		],
		Setoptions : { // 参数(都为可选参数)
			bg : boolean		// 是否有背景颜色(默认为true)
			border: boolean // 盒子周围是否有半透明边框(默认为true)
			bgcss : object	// 背景样式
			boxcss : object	// 盒子样式
			follow : boolean// 是否跟随滚动条(默认为false)
			ajaxcallback : function (id) { // ajax开启后，可选回调，id为回调函数的可选参数，返回出发弹出层按钮的ID

			}
		}
	}
*/

/*

$("#ajax").hipopup({
  follow:false,
  bg:false,
  ajax:true,
  border:false,
  bgcss:{opacity:0.5},
  ajaxcallback:function (id) {
    callbackFn(id);
  }
});

*/
(function($){
	$.fn.hipopup = function (setoptions) {
		var bgOpts, boxOpts, _this = $.fn.hipopup;

		return this.each(function(){
			var $this = $(this);

			$this.on({
				click : function(){
					setoptions = setoptions ? setoptions : {};
					setoptions.bgcss = setoptions.bgcss ? setoptions.bgcss : {};
					setoptions.boxcss = setoptions.boxcss ? setoptions.boxcss : {};
					_this.bgOpts = setoptions.bgcss ? $.extend($.fn.hipopup.bgdefault, setoptions.bgcss) : $.fn.hipopup.bgdefault;
					_this.boxOpts = setoptions.boxcss ? $.extend($.fn.hipopup.boxdefault, setoptions.boxcss) : $.fn.hipopup.boxdefault;
					_this.follow = setoptions.follow ? setoptions.follow : false;
					_this.drakbg = setoptions.bg ? setoptions.bg : false;
					_this.border = setoptions.border ? setoptions.border : false;

					var $inline = $this.attr("data-which");

					if (!$inline) {
						var $ajax = $this.attr("data-url");
						var $ajaxcallback = setoptions.ajaxcallback ? setoptions.ajaxcallback : null;
					}

					$(".hipopupbox[hipopup='ajax']").remove();
					$(".hipopupbox[hipopup='inline']").hide();

					(_this.drakbg === true) && _this.createPopupBg();
					_this.createPopupBox($ajax ? {ajax: $ajax, callback: $ajaxcallback, id : $this.attr("id")} : {inline: "#" + $inline});
				}
			});
		});
	};

	$.fn.hipopup.createPopupBg = function(){ // 创建darkBackground
		var bg = $($.fn.hipopup.option.bgTag),
				animateOption = 0,
				_this = this;

		animateOption = _this.bgOpts.opacity; // 记录opacity
		_this.bgOpts.opacity = 0.1;	// 透明度设置为最低，为animate变化做准备

		if ($(".hipopupbg").length) { // 如果darkBackground存在，直接显示darkBackground，否则创建。
			$(".hipopupbg").show();
			bgAnimate($(".hipopupbg"));
			return;
		}

		_this.bgOpts.width = $(window).width();
		_this.bgOpts.height = $(document).height();
		_this.bgOpts.filter = "alpha(opacity=" + (_this.bgOpts.opacity * 100) + ")";

		bg.appendTo($("body")).css(_this.bgOpts).show();

		function bgAnimate (bg) {
			bg.stop().animate({
				opacity: animateOption
			}, $.fn.hipopup.option.duration, function(){
				_this.bgOpts.opacity = animateOption; // 变化为还原opacity
			});
		}

		if (Modernizr.opacity) { // 在支持opacity浏览器执行透明度变化操作
			bgAnimate(bg);
		}
	};

	// methodJson 弹窗方式
	$.fn.hipopup.createPopupBox = function (methodJson) { // 创建lightBox
		/*
		methodJson = {
			ajax(inline) : urlstr(idstr)
		}

		ajax : 为http方式，urlstr为路径
		inline : 为内置html方式，idstr为ID选择器
		*/
		var box, method, _this = this;

		if (methodJson.ajax) {
			box = $($.fn.hipopup.option.boxTag);
			box.appendTo($("body")).css(_this.boxOpts);
			box.find(".inner").before("<a class='close'></a>");
			method = "ajax";
			_this.ajaxLoadDate(box, methodJson.ajax, function(){
				methodJson.callback && methodJson.callback(methodJson.id);
				_this.border && _this.borderFn(box);
				_this.rePosition(box);
			});
		} else {
			box = $(methodJson.inline).css(_this.boxOpts);
			method = "inline";
			_this.border && _this.borderFn(box);
			_this.rePosition(box);
		}

		!window.XMLHttpRequest && selectBug(); // 解决IE6下select BUG

		_this.eventFn(box, method);	// onresize onscroll 事件
		_this.closePop(box, method); // box为lightBox的JQ选择器, method为调用方法ajax || inline
	};

	$.fn.hipopup.borderFn = function (box) { // 半透明边框
		var pdr, pdt, r, t, closebtn;
		box.addClass('hipopupbox_border');

		pdr = parseInt(box.css("padding-right"));
		pdt = parseInt(box.css("padding-top"));
		box.find(".close").css({
			marginRight : pdr,
			marginTop : pdt
		});
	};

	$.fn.hipopup.rePosition = function (box) { // box定位函数 & css3animation函数
		var _this = this;
		_this.boxOpts.left = ($(document.body).width() - box.width()) / 2 + $(document).scrollLeft();
		_this.boxOpts.top = ($(window).height() - box.height()) / 2 + $(document).scrollTop();

		box.css({
			left : _this.boxOpts.left,
			top : _this.boxOpts.top
		}).show();

		if (Modernizr.cssanimations) { // 在支持animation浏览器添加css3效果
			box
			.addClass('animated ' + $.fn.hipopup.option.boxOpenAnimate)
			.on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){

	  	});
		}
	};

	$.fn.hipopup.eventFn = function (box) {
		var _this = this;
		$(window).on({
			resize : function(){

				interceptor(function(){
					if (_this.drakbg === true) {
						var bg = $(".hipopupbg");
						_this.bgOpts.width = $(document.body).width();
						_this.bgOpts.height = $(document).height();
						_this.bgOpts.display = "block";
						bg.css(_this.bgOpts);
						_this.bgOpts.display = "none";
					}

					_this.rePosition(box);
				});
			},
			scroll : function(){
				if (_this.follow === true) {
					interceptor(function(){
						_this.rePosition(box);
					});
				}
			}
		});
	};

	$.fn.hipopup.ajaxLoadDate = function (box, url, callback) {
		$.ajax({
			url : url,
			type : "GET",
			dataType: "html",
			cache: false,
			async : true,
			success : function (data) {
				box.find(".inner").html(data);
				var src = box.find(".inner img").attr("src");

				if (src) {
					imgLoad(src, function (w, h){
						callback && callback();
					});
				} else {
					callback && callback();
				}

			},
			error : function (jqXHR, textStatus, errorThrown) {
				console.log(jqXHR);
				console.log(textStatus);
				console.log(errorThrown);
			}
		});
	}

	$.fn.hipopup.closePop = function (box, method) { // 关闭hipopup函数
		var closebtn = box.find(".close"),
				bg = $(".hipopupbg"), _this = this;

		function closefn(){
			if (Modernizr.cssanimations) { // 在支持animation浏览器添加css3效果
				box.addClass('animated ' + $.fn.hipopup.option.boxCloseAnimate)
				.on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
					if ($.fn.hipopup.toggle) {
						if (method == "ajax") {
			    		box.removeClass().addClass('hipopupbox').remove();
			    	} else {
			    		box.removeClass().addClass('hipopupbox').hide();
			    	}
			    	$.fn.hipopup.toggle = false;
					}
		  	});

				bg.stop().animate({
					opacity : 0
				}, 400, function(){
					bg.hide();
				});
			} else {
				if (method == "ajax") {
	    		box.removeClass().addClass('hipopupbox').remove();
	    	} else {
	    		box.removeClass().addClass('hipopupbox').hide();
	    	}
				bg.hide();

			}
		}

		closebtn.on({
			click : function(){
				$.fn.hipopup.toggle = true;
				closefn();
			}
		});
	};

	function imgLoad (url, callback) {
    var img = new Image();

    img.src = url;
    if (img.complete) {
        callback(img.width, img.height);
    } else {
        img.onload = function () {
            callback(img.width, img.height);
            img.onload = null;
        };
    };
	};

	function selectBug(){
		//$(".hipopupbox").append("<iframe/>");
	}

	function interceptor (fn) {
		clearTimeout($.fn.hipopup.timer);
		$.fn.hipopup.timer = setTimeout(function(){
			fn && fn();
		}, 100);
	}

	$.fn.hipopup.border = true;		// 边框
	$.fn.hipopup.timer = null; 		// 函数截流定时器
	$.fn.hipopup.toggle = false;	// 解决AnimationEnd开始结束都会调用的BUG


	$.fn.hipopup.option = {
		bgTag : "<div class='hipopupbg'>",
		duration : 100,
		boxTag : "<div class='hipopupbox' hipopup='ajax'>" +
							"<div class='inner'></div>" +
						 "</div>",
		boxOpenAnimate : "flipInX",
		boxCloseAnimate : "flipOutX"
	};

	$.fn.hipopup.bgdefault = {
		display : "none",
		background : "#1e3240",
		opacity : ".5",
		position : "absolute",
		left : 0,
		top : 0,
		zIndex : 10001
	};

	$.fn.hipopup.boxdefault = {
		position : "absolute",
		left : 0,
		top : 0,
		zIndex : 10002
	};
})(jQuery)