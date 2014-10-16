define(function(require, exports, module) {
  var integrate = require('model/integrate.js');

  $("ul li").each(function(){
    integrate.showlayer($(this), $(this).find(".drop"));
  });
});