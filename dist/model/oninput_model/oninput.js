define(function(require, exports, module) {
  exports.oninput = function (obj, callback) {
    if(!obj.length)return;
    var input = obj.get(0);

    if(window.addEventListener) { //先执行W3C
      input.addEventListener("input", callback, false);
    } else {
      input.attachEvent("onpropertychange", function(){
        callback.call(input);
      });
    }

    if (navigator.userAgent.match("MSIE 9.0")) {
    //if(window.VBArray && window.addEventListener) { //IE9
      input.attachEvent("onkeyup", function() {
        var key = window.event.keyCode;
        (key == 8 || key == 46) && callback.call(input);//处理回退与删除

      });
      input.attachEvent("oncut", function(){
        callback.call(input);
      });//处理粘贴
    }
  };
});