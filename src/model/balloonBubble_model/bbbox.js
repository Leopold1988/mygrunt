define(function(require, exports, module) {
  var htmlmodel = require("model/balloonBubble_model/bbhtml.js").html;

  /*
  btn:触发按钮,如：$("#balloonBubbles .aaa")
  direction:出现方向,如"left","top","bottom"
  extendcss(可选):样式覆盖,如果位置不对用此覆盖,如{left : "200px"}。
  */
  exports.balloonBubble = function (btn, direction, extendcss) {
    var html = $(htmlmodel),
        _class = "",        // 角标方向类名
        _lr = "",           // 角标左右位置
        _tb = "",           // 角标上下位置
        _directioncss = {}; // 对话框位置

    function get (btn, bbobj) {
      if (direction == "bottom") {
        _class = "triangle_bottom";
        _lr = parseInt(btn.offset().left) - parseInt(btn.parent().offset().left);
        _tb = -( parseInt(html.get(0).offsetHeight) + 10 );
        _directioncss = {
          top : _tb,
          left : _lr
        }
        bbobj.find("span[class*='triangle_']").css({
          left : 10
        });
      } else if (direction == "left") {
        _class = "triangle_left";
        _lr = parseInt(btn.offset().left) - parseInt(btn.parent().offset().left) + parseInt(btn.get(0).offsetWidth);
        _tb = - (parseInt(bbobj.get(0).offsetHeight) - parseInt(btn.get(0).offsetHeight)) / 2;
        _directioncss = {
          top : _tb,
          left : _lr
        }
        bbobj.find("span[class*='triangle_']").css({
          top : 8,
          width : 10
        });
      } else if (direction == "top") {
        _class = "triangle_top";
        _lr = parseInt(btn.offset().left) - parseInt(btn.parent().offset().left);
        _tb = parseInt(html.get(0).offsetHeight) - 10;
        _directioncss = {
          top : _tb,
          left : _lr
        }

        bbobj.find("span[class*='triangle_']").css({
          left : 10,
          height : 10
        });
      }
    }

    btn.on({
      mouseenter : function(){
        var triangleLeft = parseInt($(this).offset().left) - parseInt($(this).parent().offset().left);
        html.appendTo($(this).parent()).show();
        get($(this), html);
        html.find("span").removeClass().addClass(_class);
        html.css($.extend(_directioncss, extendcss));
      },
      mouseleave : function(){
        html.remove();
      }
    });

  };
});