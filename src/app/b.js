define('b', function(require, exports, module) {

  // 异步加载多个模块，在加载完成时，执行回调
  require.async(['./a', './c.min'], function(a, c) {
    a.doSomething();
    c.doSomething();
  });

});