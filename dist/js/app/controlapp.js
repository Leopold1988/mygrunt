define(function(require, exports, module) {

  // 加载多个模块，在加载完成时，执行回调
  //var integrate = require('model/integrate.js');

  // integrate.console();
  require('./metro');
  require('./popup');
  require('./hoverapp');
  require('./ajaxapp').doSomething();
  require('./cookieapp').doSomething();
});