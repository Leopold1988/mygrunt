define(function(require, exports, module) {
  var countdown = require("model/countDown_model/countDown.js");
  countdown.open({
    num : 20,
    toggle : "a",
    doingfn : function (num) {
      $("#countDown").html(num);
      console.log(num);
    },
    endfn : function () {
      $("#countDown").html("完成");
    }
  });
});