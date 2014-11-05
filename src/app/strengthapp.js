define(function(require, exports, module) {
  var getdo = require("model/passwordSrength_model/strength");
  var eventdo = require("model/oninput_model/oninput");
  eventdo.oninput($("#strength input"), function(){
    var strengthnum = getdo.getStrength($("#strength input").val());
    if (strengthnum <= 10) {
      $("#strength span").html("弱");
    } else if (strengthnum <= 20) {
      $("#strength span").html("中");
    } else if (strengthnum <= 30) {
      $("#strength span").html("强");
    } else if (strengthnum > 30) {
      $("#strength span").html("完美");
    }
  });
});