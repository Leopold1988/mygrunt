define(function(require, exports, module) {

  // 加载多个模块，在加载完成时，执行回调
  var integrate = require('model/integrate.js');

  integrate.showlayer($("#hover .style1"), $("#hover .style1 .hide"));
  integrate.showlayer($("#hover .style2 a"), $("#hover .style2 .hide"));
  integrate.console();

  require('./metro');
  require('./oninputapp');
  // require('./countdownapp');
  require('./placeholderapp');
  require('./dateapp');
  require('./popup');
  require('./hoverapp');
  require('./ajaxapp').doSomething();
  require('./cookieapp').doSomething();
});