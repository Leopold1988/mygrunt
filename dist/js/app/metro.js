define(function(require, exports, module) {
  var floatC = require("model/conversion_model/floatConversion.js"),
      font = require("model/limit_model/limit.js");

  var metroUl = $("#metroUl");
  for (var i = 0; i < 12; i++) {
    metroUl.append("<li>" + font.limit("擦擦擦擦擦擦擦擦擦擦擦擦", 9) + "</li>");
  }

  floatC.change(metroUl);
});