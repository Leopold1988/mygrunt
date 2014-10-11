define(function(require, exports, module) {

  // 异步加载多个模块，在加载完成时，执行回调
  require.async('./ajaxapp', function(a) {
    a.doSomething();
  });

  require.async('./cookieapp', function(c) {
    c.doSomething();
  });

});