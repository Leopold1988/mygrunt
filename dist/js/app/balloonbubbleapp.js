define(function(require, exports, module) {
  var bbboxmodel = require("model/balloonBubble_model/bbbox");

  bbboxmodel.balloonBubble($("#balloonBubbles .aaa"), "top", {left : "200px"});
  // bbboxmodel.balloonBubble($("#balloonBubbles .aaa"), "bottom");
  // bbboxmodel.balloonBubble($("#balloonBubbles .aaa"), "left");
});