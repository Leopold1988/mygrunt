/*! DoMyNet 0.1.0 2014-10-09 */
define('a', function(require, exports, module) {

  // 通过 require 引入依赖

  // 通过 exports 对外提供接口
  exports.doSomething = function(){
    console.log(111);
    $("p").html("jquery Finished loading");
  };




});;define('b', function(require, exports, module) {

  // 异步加载多个模块，在加载完成时，执行回调
  require.async(['./a', './c.min'], function(a, c) {
    a.doSomething();
    c.doSomething();
  });

});;define('c', function(require) {

  // 通过 return 直接提供接口
  return {
    doSomething: function() {
      console.log("c.min.js");
    }
  };

});