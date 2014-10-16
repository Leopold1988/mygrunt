define(function(require, exports, module) {
  exports.change = function (obj) {
    var child = obj.find("li");
    var arr = [];

    obj.css("height", obj.height());

    child.each(function (i, e) {
      arr.push([
        $(this).offset().left - $(this).css("margin-left").replace("px", ""),
        $(this).offset().top - $(this).css("margin-top").replace("px", "")
      ]);
    });

    child.each(function (i, e) {
      $(this).css({
        position : "absolute",
        left : arr[i][0],
        top : arr[i][1]
      });
    });
  };
});