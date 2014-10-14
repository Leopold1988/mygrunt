define(function(require, exports, module) {
  exports.change = function (obj) {
    var child = obj.find("li");
    var arr = [];

    child.each(function (i, e) {
      arr.push([$(this).offset().left, $(this).offset().top]);
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