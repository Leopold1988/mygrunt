define('a', function(require, exports, module) {

  // 通过 require 引入依赖

  // 通过 exports 对外提供接口
  exports.doSomething = function(){
    console.log(111);
    $("p").html("jquery Finished loading");
  };




});