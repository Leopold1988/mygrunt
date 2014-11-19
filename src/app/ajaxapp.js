define(function(require, exports, module) {

  // 通过 require 引入依赖
  var ajax = require("model/ajax_model/ajax");
  // 通过 exports 对外提供接口
  exports.doSomething = function(){
    function successfn (json) {
      console.log(json);
    }

    function errorfn (errcode) {
      console.log(2);
    }

    ajax.doit({}, successfn, errorfn);
  };
});