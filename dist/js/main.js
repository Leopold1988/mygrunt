// 加载模块 main，并在加载完成时，执行指定回调
seajs.use('js/Domy', function () {
  var a = seajs.require("a");
  a.doSomething();
});
